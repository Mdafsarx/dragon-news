import { Link } from "react-router-dom";

const NewsCard = ({News}) => {
    const {image_url,title,details,_id}=News || {}
    return (
        <div>
            <div className="rounded-md shadow-md p-3">
                <div className="flex items-center justify-between p-3 bg-gray-100">
                    <div className="flex items-center space-x-2 ">
                        <img src={image_url} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">leroy_jenkins72</h2>
                            <span className="inline-block text-xs leading-none text-gray-400">Somewhere</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-lg font-bold">{title}</p>
                <img src={image_url} alt="" className="w-full h-[500px] bg-gray-500" />
                {
                  details.length>200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`}
                  className="text-blue-600 font-bold">Read More</Link></p> : <p>{details}</p>
                }
                
            </div>
        </div>
    );
};

export default NewsCard;