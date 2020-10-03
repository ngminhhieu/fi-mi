import React, { useState } from "react";
import classNames from "classnames";
import "./header.sass";

const menu_list = [
  { text: "Home", link: "#" },
  { text: "Team", link: "#" },
  { text: "Fi-Mi Architecture", link: "#" },
  { text: "Objectives", link: "#" },
  { text: "Deliverables", link: "#" },
  { text: "Publications", link: "#" },
  { text: "News", link: "#" },
  { text: "Contact", link: "#" }
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
          <a href="#abc">
            <img src={require("../images/logo.png")} alt="" />
          </a>
        </div>
        <div className="menu">
          {menu_list.map((item, index) => (
            <a href={item.link} className="item">
              {item.text}
            </a>
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
            <a href={item.link} className="item">
              {item.text}
            </a>
          ))}
        </div>
        <div className="logo">
          <a href="#abc">
            <img src={require("../images/logo.png")} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
