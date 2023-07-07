import { useEffect, useState } from "react";
import "./header.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useGlobalContext } from "../../../context/context";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        R<span>CAI</span>.
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) =>
  isActive ? "active" : "";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {isLoggedin,setIsLoggedin} = useGlobalContext()

  const location = useLocation()
  const currentRoute = location.pathname
  const getCurrentRoute = () => {
    if(currentRoute === '/' || currentRoute === '/about' || currentRoute === '/events' || currentRoute === '/contact'){
      return true
    }
    else return false
  }
  console.log(currentRoute)

  useEffect(() => {
    getCurrentRoute()
    changeColor()
  },[currentRoute])


function changeColor() {
  if(window.scrollY <= 90 && getCurrentRoute()){
    document.getElementById("header").style.backgroundColor="transparent";
  }
  else if(window.scrollY <= 90){
    document.getElementById("header").style.backgroundColor="#274d5a";
  }
  else if (window.scrollY >= 90) {
    document.getElementById("header").style.backgroundColor="#274d5a";
  } else {
    document.getElementById("header").style.backgroundColor="transparent";
  }
}
window.addEventListener("scroll", changeColor);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful");
        setIsLoggedin(false)
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navigate = useNavigate();

  // useEffect(() => {

  // },[isLoggedin])

  return (
    <>
    <ToastContainer/>
      <header id="header" className="fixed" >
        <div className="header">
          {logo}
          <nav className={showMenu ? "show-nav" : "hide-nav"}>
            <div
              className={
                showMenu ? "nav-wrapper show-nav-wrapper" : "nav-wrapper"
              }
              onClick={hideMenu}
            ></div>
            <ul onClick={hideMenu}>
              <li className="logo-mobile">
                <Link to="/">{logo}</Link>
                <FaTimes size={22} color="#fffff" onClick={hideMenu} />
              </li>
              {/* <AdminOnlyLinks>
                <li>
                  <Link to="/admin/home">
                    <button className="--btn --btn-primary">Admin</button>
                  </Link>
                </li>
              </AdminOnlyLinks> */}
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={activeLink}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="events" className={activeLink}>
                  Our Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="header-right" onClick={hideMenu}>
              <span className="links">
                {isLoggedin && <NavLink to="/a" onClick={logoutUser}>
                    Logout
                  </NavLink>}
                {!isLoggedin && <NavLink to="/login" >
                    Login as Admin
                  </NavLink>}
                {isLoggedin && <NavLink to="/admin" >
                    Admin Panel
                  </NavLink>}
              </span>
              
            </div>
          </nav>

          <div className="menu-icon">
            <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
