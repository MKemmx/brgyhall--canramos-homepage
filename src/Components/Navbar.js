import React, { useEffect } from "react";

// React Router DOM
import { Link, useNavigate, useLocation } from "react-router-dom";

// React Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

// State Store
import useLoginStore from "../store/loginAuth";

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
  // GLOBAL STATES
  const { isAuthenticated, logout, user } = useLoginStore((state) => state);

  return (
    <>
      {regPaths.includes(pathname) && (
        <>
          <div className="navbar">
            <div className="navbar-container">
              <Link className="title" to={!isAuthenticated ? "/" : "#"}>
                <h3> SK Canramos Project </h3>
              </Link>

              <Link className="title-2" to={!isAuthenticated ? "/" : "#"}>
                <h3> SK Canramos </h3>
              </Link>

              {/* LIST */}
              {!isAuthenticated ? (
                <>
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
                              <a href={`#${listName}`}>
                                {listName.toUpperCase()}
                              </a>
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
                        color="white"
                        onClick={() => {
                          setShowNav(false);
                        }}
                        size={24}
                      />
                    ) : (
                      <GiHamburgerMenu
                        color="white"
                        onClick={() => {
                          setShowNav(true);
                        }}
                        size={24}
                      />
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div onClick={logout} className="avatar">
                    <div className="avatar-container"> {user.firstName[0]}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
