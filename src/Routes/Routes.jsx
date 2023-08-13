import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Basmati from "../pages/Sidebarproducts/Rice/Basmati/Basmati";
import Chinigura from "../pages/Sidebarproducts/Rice/Chinigura/Chinigura";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path: "/",
      element: <Home/>,
      },
      {
        path:"/aboutus",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/basmati",
        element:<Basmati></Basmati>
      },
      {
        path:"/Chinigura",
        element:<Chinigura></Chinigura>
      }
    ]
    },
  ]);
  