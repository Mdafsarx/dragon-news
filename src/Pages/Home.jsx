import Header from "../components/Header/Header";
import BrakingNews from "../components/Marque/BrakingNews";
import Navbar from "../components/Navber/Navbar";
import NewsCard from "../components/NewsCard";
import LeftSide from "../components/ThreeItems/LeftSide";
import RightSide from "../components/ThreeItems/RightSide";
import {useLoaderData} from "react-router-dom"
const Home = () => {
     
    const news=useLoaderData()
    
    return (
        <div className="space-y-2">
            <Header/>
            <BrakingNews/>
            <Navbar/>
            {/* shared */}
            <div className=" grid lg:grid-cols-4 gap-4">

                <div className="col-span-1 ">
               <LeftSide/>
                </div>

                <div className="lg:col-span-2 border rounded">
                    <h1 className="text-xl p-3 font-bold">Dragon News Home</h1>
                    <div className="space-y-8">
                    {
                        news?.map((n,i)=><NewsCard key={i} News={n}/>)
                    }
                    </div>
                </div>

                <div className="col-span-1 ">
                    <RightSide/>
                </div>


            </div>
        </div>

    );
};

export default Home;