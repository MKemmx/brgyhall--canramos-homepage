import React from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = ({ showNav, setShowNav }) => {
  let { pathname } = useLocation();
  let navigate = useNavigate();
  const navList = [
    {
      listName: "home",
    },
    {
      listName: "projects",
    },
    {
      listName: "services",
    },
    {
      listName: "map",
    },
    {
      listName: "login",
    },
  ];

  // Concst REG PATHS
  const regPaths = ["/login", "/register", "/transaction", "/"];

  return (
    <>
      {regPaths.includes(pathname) && (
        <>
          <div className="navbar">
            <div className="navbar-container">
              <Link className="title" to="/">
                <h3> SK Canramos Project </h3>
              </Link>

              <Link className="title-2" to="/">
                <h3> SK Canramos </h3>
              </Link>

              {/* LIST */}
              <ul className={showNav ? "navlist show" : "navlist"}>
                <>
                  {navList.map(({ listName }, idx) => {
                    return (
                      <li
                        className={
                          pathname === "/login" || pathname === "/register"
                            ? "hide-li"
                            : ""
                        }
                        onClick={() => {
                          setShowNav(false);
                        }}
                        key={idx}
                      >
                        {regPaths.includes(`/${listName}`) ? (
                          // eslint-disable-next-line
                          <a
                            onClick={() => {
                              navigate(`/${listName}`);
                            }}
                          >
                            {listName.toUpperCase()}
                          </a>
                        ) : (
                          <a href={`#${listName}`}>{listName.toUpperCase()}</a>
                        )}
                      </li>
                    );
                  })}
                </>
              </ul>

              <div
                id={
                  pathname === "/login" || pathname === "/register"
                    ? "menu-hide"
                    : "menudiv"
                }
                className="hamburger-menu"
              >
                {showNav ? (
                  <AiOutlineCloseCircle
                    onClick={() => {
                      setShowNav(false);
                    }}
                    size={24}
                  />
                ) : (
                  <GiHamburgerMenu
                    onClick={() => {
                      setShowNav(true);
                    }}
                    size={24}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
