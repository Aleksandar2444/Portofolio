import "./NavBar.css";
import { NavLink } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

const NavBar = (props) => {
  const logoData = [
    {
      text: "A",
      href: "/Portofolio",
    },
    {
      text: "Alex",
      href: "/Portofolio",
    },
  ];

  const navbarLinkData = [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "My Skills",
      href: "/my-skills",
    },
    {
      text: "Work",
      href: "/work",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="LeftSide__Container">
      <div className="name__details">
        <span>
          <NavLink to={logoData[0].href}>A</NavLink>
        </span>
        <p className="name__paragraph">
          <NavLink to={logoData[1].href}>{logoData[1].text}</NavLink>
        </p>
        <p>Fullstack Developer</p>
      </div>
      <div className="links">
        <ul className="links__details">
          {navbarLinkData.map((link, i) => (
            <li key={i}>
              <NavLink to={link.href}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="Icons__Container">
        <ul className="social__icons">
          <li>
            <a
              href="https://www.linkedin.com/in/aleksandar-ichev-9aab41244/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Aleksandar2444?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/icevackow/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aleksandarichev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="mailto: ackowwokca@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogle />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
