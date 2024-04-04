import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="bg-gray-100 p-2 flex">
            <button className="btn btn-error">Latest</button>
           <Marquee speed={100} className="*:text-red-500" pauseOnHover={true}>
           I can be a React component, multiple React components, or just some text.
           </Marquee>
        </div>
    );
};

export default BrakingNews;