import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-full">
                    <img className="relative w-[550px]" src={person} alt="" />
                    <img className="w-[400px] absolute left-[260px] -bottom-[320px] border-[5px] border-white" src={parts} alt="" />
                </div>
                <div className=" space-y-5 w-full">
                    <h2 className="text-base font-semibold text-orange-500">About Us</h2>
                    <h2 className="text-3xl font-semibold">We are qualified & of experience in this field</h2>
                    <p className="text-base font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="text-base font-medium text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn bg-orange-500 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;