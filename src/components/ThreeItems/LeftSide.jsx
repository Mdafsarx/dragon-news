import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import RightSideCard from "./rightSideCard";
// import { NavLink } from "react-router-dom";

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(()=>{
      axios.get('./news.json')
      .then(data=>setNews(data.data))
    },[])
    return (
        <div className="p-4 space-y-2">
            <h1 className="text-2xl font-bold">All categories</h1>

            <div className="p-2 space-y-6">
                {
                    categories?.map((c, idx) => <Link  className='block' key={idx}><button>{c.name}</button></Link>)
                }
            </div>
            

            <div>
                {
                  news?.map((n,i)=><RightSideCard key={i} News={n}/>)
                }
            </div>


        </div>
    );
};

export default LeftSide;