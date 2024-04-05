import Header from "../components/Header/Header";
import Navbar from "../components/Navber/Navbar";
import RightSide from "../components/ThreeItems/RightSide";
import {useParams} from "react-router-dom"

const NewsDetails = () => {
    const {id}=useParams()
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid lg:grid-cols-5">

                <div className="col-span-4">
                    <h1 className="text-xl font-bold">Dragon news</h1>
                </div>

                <div>
                    <RightSide/>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;