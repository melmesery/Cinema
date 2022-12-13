import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../Styles/Header.css";

function Header({ search }) {
  const onSearch = (word) => {
    search(word);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <p className="logo mb-0 mt-2 me-4">
          WATCH<sup>+</sup>
        </p>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggle-icon">
            <AiOutlineMenu />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <div className="search d-flex align-items-center">
                <input
                  type="text"
                  className=" "
                  placeholder="What do you want to watch?"
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link LINK" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn-secondary dropdown-toggle dropdown-style"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </button>
                <ul className="dropdown-menu rounded-0 border-0 p-0">
                  <li>
                    <Link className="nav-link LINK" to="/movies">
                      Movies
                    </Link>
                  </li>
                  <hr className="m-0" />

                  <li>
                    <Link className="nav-link LINK" to="/tv-series">
                      TV Shows
                    </Link>
                  </li>
                  <hr className="m-0" />

                  <li>
                    <Link className="nav-link LINK" to="/tv-series">
                      Contact
                    </Link>
                  </li>
                  <hr className="m-0" />

                  <li>
                    <Link className="nav-link LINK" to="/tv-series">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link LINK" aria-current="page" to="/home">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link LINK" aria-current="page" to="/home">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
