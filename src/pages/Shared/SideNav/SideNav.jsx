import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./SideNav.css";
import { useState } from "react";
const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`h-screen fixed flex overflow-hidden ${
        isOpen ? "overflow-y-auto" : ""
      }`}
    >
      <Sidebar className="sidebar">
        {" "}
        {/* Add the "sidebar" class */}
        <Menu>
          <SubMenu label="Rice">
            <Link to={`/basmati`}>
              <MenuItem> Basmati </MenuItem>
            </Link>
            <Link to={`/chinigura`}>
              <MenuItem> Chinigura </MenuItem>
            </Link>
          </SubMenu>
          <Link to={`/oil`}>
            <MenuItem> Oil </MenuItem>
          </Link>
          <Link to={`/tea`}>
            <MenuItem> Tea </MenuItem>
          </Link>
          <Link to={`/softdrinks`}>
            <MenuItem> Soft Drinks </MenuItem>
          </Link>
          <Link to={`/juice`}>
            <MenuItem> Juice </MenuItem>
          </Link>
          <Link to={`/coffee`}>
            <MenuItem> Coffee </MenuItem>
          </Link>
          <Link to={`/flour`}>
            <MenuItem> Flour </MenuItem>
          </Link>
          <Link to={`/noodles`}>
            <MenuItem> Noodles </MenuItem>
          </Link>
          <Link to={`/toastandBakeryBiscuits`}>
            <MenuItem> Toast & Bakery Biscuits </MenuItem>
          </Link>
          <Link to={`/meat`}>
            <MenuItem> Meat </MenuItem>
          </Link>
          <Link to={`/spices`}>
            <MenuItem> Spices </MenuItem>
          </Link>
          <Link to={`/dairy`}>
            <MenuItem> Dairy </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideNav;
