const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// middleware 
const logged = async (req, res, next) => {
    console.log('Callde:', req.host, req.originalUrl);
    next()
}

const verifyToken = async (req, res, next) => {
    const token = req.cookies?.token;
    // console.log('value of token in middleware', token);
    if (!token) {
        return res.status(401).send({ messag: 'No Authrize' });
    }
    jwt.verify(token, process.env.Access_Secret_Token, (err, decoded) => {
        // error
        if (err) {
            return res.status(401).send({ messag: 'No Access Authrize' });
        }
        // if token is valid then it would be decoded 
        // console.log('value in the token', decoded);
        req.user = decoded;
        next()
    })
}



const uri = `mongodb+srv://${process.env.Database_User}:${process.env.Database_Pass}@cluster0.3x1kphs.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // car doctor database 
        const serviceCollaction = client.db('carDoctor').collection('service');
        const booking = client.db('carDoctor').collection('booking');


        // jwt token 
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            console.log(user);
            const token = jwt.sign(user, process.env.Access_Secret_Token, { expiresIn: '1h' });
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                    // sameSite: 'none' 
                })
                .send({ success: true });
        })

        // service data 

        app.get('/service', logged, async (req, res) => {
            const cursor = serviceCollaction.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const options = {
                // Include only the `title` and `imdb` fields in the returned document
                projection: { title: 1, price: 1, service_id: 1, img: 1 },
            };
            const result = await serviceCollaction.findOne(query, options);
            res.send(result);
        })


        // booking data
        app.get('/booking', logged, verifyToken, async (req, res) => {
            console.log(req.query.email)
            // console.log('tok tok token', req.cookies.token)
            console.log('form valid token ', req.user);
            if(req.query.email !== req.user.email){
                return res.status(403).send({messag: 'forbidd access'})
            }

            let query = {}
            if (req.query?.email) {
                query = { email: req.query.email }
            }
            const result = await booking.find(query).toArray()
            res.send(result);
        })

        app.post('/booking', async (req, res) => {
            const bookings = req.body;
            const result = await booking.insertOne(bookings);
            res.send(result);
        })

        app.patch('/booking/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updateBooking = req.body;
            const updateDoc = {
                $set: {
                    status: updateBooking.status
                },
            };
            const result = await booking.updateOne(filter, updateDoc);
            res.send(result);
        })

        app.delete('/booking/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await booking.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Car Doctor Server Site Runing On');
})

app.listen(port, () => {
    console.log(`Car Doctor Server Runing On Port ${port}`);
})