import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="fixed">
      <Sidebar>
        <Menu>
          <SubMenu label="Rice">
           <Link to={`/basmati`}><MenuItem> Basmati </MenuItem></Link> 
           <Link to={`/chinigura`}><MenuItem> Chinigura </MenuItem></Link> 
          </SubMenu>
          <Link to={`/oil`}><MenuItem> Oil </MenuItem></Link> 
          <MenuItem> Tea </MenuItem>
          <MenuItem> Soft Drinks </MenuItem>
          <MenuItem> Juice </MenuItem>
          <MenuItem> Coffee </MenuItem>
          <MenuItem> Flour </MenuItem>
          <MenuItem> Noodles </MenuItem>
          <MenuItem> Toast & Bakery Biscuits </MenuItem>
          <SubMenu label="Meat">
            <MenuItem> Mutton </MenuItem>
            <MenuItem> Chicken </MenuItem>
          </SubMenu>
          <MenuItem> Soap </MenuItem>
          <MenuItem> Salt </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default SideNav;
