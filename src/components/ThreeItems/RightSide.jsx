import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import q1 from "../../assets/assets/qZone1.png"
import q2 from "../../assets/assets/qZone2.png"
import q3 from "../../assets/assets/qZone3.png"


const RightSide = () => {
    return (
        <div className="p-4 space-y-5">

            {/* login with */}
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">Login with</h1>
                <button className="btn btn-outline flex items-center gap-2 w-full"><FcGoogle className="text-lg" /> <span>Login with Google</span>
                </button>
                <button className="btn btn-outline flex items-center gap-2 w-full"><VscGithubInverted className="text-lg" /> <span>Login with Github</span>
                </button>
            </div>

            {/* find us on */}
            <div>
                <h1 className="text-2xl font-bold pb-2">Find us on</h1>

                <a href="" className="flex items-center text-lg gap-4 border rounded-t-lg p-2"><FaFacebookF /><span>Facebook</span></a>

                <a href="" className="flex items-center text-lg gap-4 border  p-2"><FaTwitter /><span>Twitter</span></a>

                <a href="" className="flex items-center text-lg gap-4 border rounded-b-lg p-2"><FiInstagram /><span>Instagram</span></a>

            </div>

            {/* Q-zone */}
            <div className="bg-gray-200 p-4">
                <h1 className="text-2xl font-bold pb-2">Q-zone</h1>
                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />
                
            </div>



        </div>
    );
};

export default RightSide;