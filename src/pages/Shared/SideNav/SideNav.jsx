import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const SideNav = () => {
  return (
    <div className="fixed">
      <Sidebar>
        <Menu>
          <SubMenu label="Rice">
            <MenuItem> Basmati </MenuItem>
            <MenuItem> MiniKit </MenuItem>
          </SubMenu>
          <MenuItem> Oil </MenuItem>
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
