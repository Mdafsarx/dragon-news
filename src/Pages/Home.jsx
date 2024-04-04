import Header from "../components/Header/Header";
import BrakingNews from "../components/Marque/BrakingNews";
import Navbar from "../components/Navber/Navbar";
import LeftSide from "../components/ThreeItems/LeftSide";
import RightSide from "../components/ThreeItems/RightSide";

const Home = () => {
    return (
        <div className="space-y-2">
            <Header/>
            <BrakingNews/>
            <Navbar/>
            {/* shared */}
            <div className=" grid lg:grid-cols-4 gap-4">

                <div className="col-span-1 border">
               <LeftSide/>
                </div>

                <div className="lg:col-span-2 border">
                    <h1 className="text-3xl font-bold">middle</h1>
                </div>

                <div className="col-span-1 border">
                    <RightSide/>
                </div>


            </div>
        </div>

    );
};

export default Home;