import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return <React.Fragment>

    
<header id="header-wrap">
        <nav class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
          <div class="container">
            <a href="index.html" class="navbar-brand"><img src="assets/img/logo.png" alt="" class="image-logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <i class="lni-menu"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto w-100 clearfix">
                <li class="nav-item ">
                  <Link class="nav-link" to="/">
                    Games
                </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/review">
                    Reviews
                </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#feature">
                    Coming Soon
                </a>
                </li>
              </ul>
              <ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li class="nav-item ">
                  <input
                    type="text"
                    class="bg-gray-800 text-sm rounded-full outline-none shadow-outline w-64 px-3 pl-8 py-1"
                    placeholder="Search (Press '/' to focus)"
                  />
                </li>
                <li class="nav-item ">
                  <a href="#"><img src="assets/img/avatar.jpg" alt="avatar" class="rounded-full w-8" /></a>

                </li>


              </ul>
            </div>
          </div>
        </nav>


      </header>
  </React.Fragment>;
}

export default Header;
