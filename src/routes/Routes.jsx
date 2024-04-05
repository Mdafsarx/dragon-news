import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><NewsDetails/></PrivateRoute>
            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register/>
            }
        ]
    },

]);



export default router