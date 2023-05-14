import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import LayoutTwo from "../../Layout/LayoutTwo";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignIn-SignUp/SignUp/SignUp";
import SignIn from "../../Pages/SignIn-SignUp/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Home></Home> }],
  },
  {
    path: "/",
    element: <LayoutTwo></LayoutTwo>,
    children: [
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
