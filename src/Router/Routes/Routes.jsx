import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import LayoutTwo from "../../Layout/LayoutTwo";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/SignIn-SignUp/SignUp/SignUp";
import SignIn from "../../Pages/SignIn-SignUp/SignIn/SignIn";
import CheckOut from "../../Pages/Home/CheckOut/CheckOut";
import NewService from "../../Pages/Home/NewService/NewService";
import Orders from "../../Pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/services/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/add",
        element: <NewService></NewService>,
      },
    ],
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
