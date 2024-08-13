import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }
        ]
    }
])