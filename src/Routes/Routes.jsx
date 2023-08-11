import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

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
      }
    ]
    },
  ]);
  