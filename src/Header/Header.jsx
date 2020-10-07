import React, { useState } from "react";
import classNames from "classnames";
import "./header.sass";
import { BrowserRouter as Router, Link } from "react-router-dom";

const menu_list = [
  { text: "Home", link: "/" },
  { text: "Team", link: "/team" },
  { text: "Fi-Mi Architecture", link: "/architecture" },
  { text: "Objectives", link: "/objective" },
  { text: "Deliverables", link: "/deliverable" },
  { text: "Publications", link: "/publication" },
  { text: "News", link: "/news" },
  { text: "Contact", link: "/contact" }
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => setOpen(true);

  const closeMenu = (e) => {
    const tag = e.target.tagName;

    if (tag !== "A" && tag !== "IMG") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="header">
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <img src={require("../images/logo.png")} alt="" />
          </Link>
        </div>
        <div className="menu">
          {menu_list.map((item, index) => (
            <Link to={item.link} className="item">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="mobile_navigation">
        <div className="menu_icon" onClick={() => showMenu()}>
          <img src={require("../images/header/menu.png")} alt="menu" />
        </div>
        <div
          className={classNames({ menu_list: true, active: open })}
          onClick={(e) => closeMenu(e)}
        >
          <div className="menu_close">
            <img src={require("../images/header/close.png")} alt="close" />
          </div>
          {menu_list.map((item, index) => (
            <Link to={item.link} className="item">
              {item.text}
            </Link>
          ))}
        </div>
        <div className="logo">
          <Link to="/">
            <img src={require("../images/logo.png")} alt="" />
          </Link>
        </div>
      </div>
      <div className="block_title">News</div>
    </div>
  );
};

export default Header;
