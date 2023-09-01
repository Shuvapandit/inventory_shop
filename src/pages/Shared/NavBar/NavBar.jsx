import { Outlet, Link } from "react-router-dom";
import { useShoppingBag } from "../ShoppingBagContext/ShoppingBagContext";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useContext } from "react";
import { UsersauthContext } from "../Userscontext/UsersContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const { bagCount } = useShoppingBag();
  const { user, logOut } = useContext(UsersauthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Show a success toast message
        toast.success("Logout successful");
      })

      .catch((error) => {
        toast.error("Logout unsuccessful. Please try again.");
        console.log(error);
      });
  };
  const navOptions = (
    <>
      <Link to={`/`}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to={`/aboutus`}>
        <li>
          <a>About Us</a>
        </li>
      </Link>
      <Link to={`/contact`}>
        <li>
          <a>Contact Us</a>
        </li>
      </Link>
    </>
  );
  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-sky-600 text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-600 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={`/`}>
            {" "}
            <a className=" normal-case text-xl">E-Shop</a>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/*   <ul className="menu menu-horizontal  px-1">{navOptions}</ul>  */}
          <div className="px-1 flex flex-row list-none gap-4">{navOptions}</div>
        </div>
        <div className="navbar-end mr-2">
          {/*  <input type="text" placeholder="Search for products (e.g. milk,juice,fish)" className="input input-bordered input-sm w-full max-w-xs text-black" /> */}

          <Link to="/bag">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {bagCount}
                </span>
              </div>
            </label>
          </Link>

          {user ? (
            <a onClick={handleLogOut} className="btn btn-ghost btn-circle">
              LogOut
            </a>
          ) : (
            <Link to={`/login`}>
              <a className="btn btn-ghost btn-circle">LogIn</a>
            </Link>
          )}
          {/*  drawer */}
          <div className="lg:hidden">
            <div className="drawer ">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
                {/*  icon start */}

                <label
                  htmlFor="my-drawer-4"
                  className="btn btn-square btn-ghost drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </label>
                {/* icon end */}
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className="bg-gray-100 text-black h-screen">
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
                </div>
              </div>
            </div>
          </div>
          {/*   drower */}
        </div>
      </div>
    </>
  );
};
export default NavBar;
