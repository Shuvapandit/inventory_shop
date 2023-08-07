import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path: "/",
      element: <Home/>,
      }
    ]
    },
  ]);
  