
const RightSideCard = ({News}) => {
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={News?.image_url} alt="" className="object-cover object-center w-full  rounded-md dark:bg-gray-500" />
                <p className=" mt-3 font-bold">{News.title}</p>
            </div>
            <div>
                <span>{}</span>
            </div>
        </div>
    );
};

export default RightSideCard;