//Importing nescessary libraies and components
import react, { useState } from "react"; //Importing react library
import { FaBars, FaReact } from "react-icons/fa"; //Import react icon from react-icon
import { Link } from "react-router-dom"; //importing Link component for routing
import { HiX } from "react-icons/hi";
import "./style.scss";

//Data array that hold the labels, paths, and descriptions for navigation items
const data = [
  {
    label: "HOME", // Display name of the  link
    to: "/", //Router path
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

//NavBar functional component that renders the navigation bar
const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);


  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

//Exporting NavBar component to use it in other parts of the app
export default NavBar;
