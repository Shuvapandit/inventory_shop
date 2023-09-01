import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Basmati from "../pages/Sidebarproducts/Rice/Basmati/Basmati";
import Chinigura from "../pages/Sidebarproducts/Rice/Chinigura/Chinigura";
import Oil from "../pages/Sidebarproducts/Oil/Oil";
import Tea from "../pages/Sidebarproducts/Tea/Tea";
import Softdrinks from "../pages/Sidebarproducts/Softdrinks/Softdrinks";
import Juice from "../pages/Sidebarproducts/Juice/Juice";
import Coffee from "../pages/Sidebarproducts/Coffee/Coffee";
import Flour from "../pages/Sidebarproducts/Flour/Flour";
import Noodles from "../pages/Sidebarproducts/Noodles/Noodles";
import ToastandBakeryBiscuits from "../pages/Sidebarproducts/Toastandbakerybiscuits/ToastandBakeryBiscuits";
import Meat from "../pages/Sidebarproducts/Meat/Meat";
import Spices from "../pages/Sidebarproducts/Spices/Spices";
import Dairy from "../pages/Sidebarproducts/Dairy/Dairy";
import Login from "../pages/Shared/Login/Login";
import Signup from "../pages/Shared/Signup/Signup";
import Bag from "../pages/Shared/Bag/Bag";
import PrivateRoutes from "../pages/Shared/PrivateRoutes/PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/basmati",
        element: <Basmati></Basmati>,
      },
      {
        path: "/Chinigura",
        element: <Chinigura></Chinigura>,
      },
      {
        path: "/oil",
        element: <Oil></Oil>,
      },
      {
        path: "/tea",
        element: <Tea></Tea>,
      },
      {
        path: "/softdrinks",
        element: <Softdrinks></Softdrinks>,
      },
      {
        path: "/juice",
        element: <Juice></Juice>,
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
      },
      {
        path: "/flour",
        element: <Flour></Flour>,
      },
      {
        path: "/noodles",
        element: <Noodles></Noodles>,
      },
      {
        path: "/toastandBakeryBiscuits",
        element: <ToastandBakeryBiscuits></ToastandBakeryBiscuits>,
      },
      {
        path: "/meat",
        element: <Meat></Meat>,
      },
      {
        path: "/spices",
        element: <Spices></Spices>,
      },
      {
        path: "/dairy",
        element: <Dairy></Dairy>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/bag",
        element: (
          <PrivateRoutes>
            {" "}
            <Bag></Bag>{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
