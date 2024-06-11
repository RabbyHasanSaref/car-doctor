import About from "./About";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[500px]">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full " />

                    <div className="absolute flex justify-start transform -translate-y-1/2  left-5 right-5 top-1/2">
                        <div className="space-y-5">
                            <h1 className="text-4xl text-black">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-500 border-none text-white mr-5 w-[150px]">Discover More</button>
                                <button className="btn btn-outline text-white  mr-5 w-[150px]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-start transform -translate-y-1/2  left-5 right-5 top-1/2">
                        <div className="space-y-5">
                            <h1 className="text-4xl text-black">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-500 border-none text-white mr-5 w-[150px]">Discover More</button>
                                <button className="btn btn-outline text-white  mr-5 w-[150px]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-start transform -translate-y-1/2  left-5 right-5 top-1/2">
                        <div className="space-y-5">
                            <h1 className="text-4xl text-black">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-500 border-none text-white mr-5 w-[150px]">Discover More</button>
                                <button className="btn btn-outline text-white  mr-5 w-[150px]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-start transform -translate-y-1/2  left-5 right-5 top-1/2">
                        <div className="space-y-5">
                            <h1 className="text-4xl text-black">Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn bg-orange-500 border-none text-white mr-5 w-[150px]">Discover More</button>
                                <button className="btn btn-outline text-white  mr-5 w-[150px]">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="my-10">
                <About></About>
            </div>

            <div className="my-10">
                <Service></Service>
            </div>
        </div>
    );
};

export default Home;