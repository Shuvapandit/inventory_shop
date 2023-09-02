import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import SideNav from "../pages/Shared/SideNav/SideNav";
import Footer from "../pages/Shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="lg:w-1/5 ">
          <SideNav />
        </div>
        <div className="lg:w-4/5 ">
          <Outlet></Outlet>
          <div className=" ml-[-20px] ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
