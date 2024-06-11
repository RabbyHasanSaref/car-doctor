import { Outlet } from "react-router-dom";
import Header from "../page/sherd/Header/Header";
import Footer from "../page/sherd/Footer/Footer";

const Root = () => {
    return (
        <div className="container lg:px-5 px-2 mx-auto">
            {/* header  */}
            <div>
                <Header></Header>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

            {/* footer  */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;