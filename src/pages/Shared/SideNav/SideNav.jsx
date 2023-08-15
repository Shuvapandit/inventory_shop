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
          <Link to={`/tea`}><MenuItem> Tea </MenuItem></Link> 
          <Link to={`/softdrinks`}><MenuItem> Soft Drinks </MenuItem></Link> 
          <Link to={`/juice`}><MenuItem> Juice </MenuItem></Link> 
          <Link to={`/coffee`}><MenuItem> Coffee </MenuItem></Link> 
          <Link to={`/flour`}><MenuItem> Flour </MenuItem></Link> 
          <Link to={`/noodles`}><MenuItem> Noodles </MenuItem></Link> 
          <Link to={`/toastandBakeryBiscuits`}><MenuItem> Toast & Bakery Biscuits  </MenuItem></Link> 
         
          

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
