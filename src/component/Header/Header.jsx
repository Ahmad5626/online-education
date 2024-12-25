import React from 'react'
import logo from '../assets/img/logo/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {

  function showmenu(){
    document.querySelector('.mobile-menu-wrapper').classList.toggle('body-visible');
  }
  return (
    <div>
      <header class="nav-header header-layout1">
  {/* <!--==============================
      Header One Top Area
      ==============================--> */}
  <div class="header-one-top-area">
    <div class="container">
      <div class="header-top-content v1">
        <p class="discount-the-month">
          We are giving best offers for new students 25% discount this month
        </p>
        <ul class="user-login">
          <li>
            <i class="my-icon icon-user"></i>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* <!--==============================
      Top Content Info
      ==============================--> */}
  <div class="top-content-info">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-2 d-flex align-items-center justify-content-between ">
          <div class="logo-img">
            <Link to="/">
              <img src={logo} alt="edupls-icon" />
            </Link>
           
          </div>
          <div class="navbar-right d-inline-flex d-lg-none">
              <button type="button" class="menu-toggle icon-btn" onClick={showmenu}>
              <i class="fa-solid fa-bars"></i>
              </button>
            </div>
        </div>

        <div class="col-lg-6">
          <div class="nav-middle-content">
            <div class="content-location">
              <div class="location-icon">
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="info-data">
                <a class="title" href="#">Edupls Location</a>
                <p class="para text">Chandigarh India</p>
              </div>
            </div>
            <div class="content-address">
              <div class="address-icon">
              <i class="fa-regular fa-envelope"></i>
              </div>
              <div class="info-data">
                <a class="title" href="#">Email Address</a>
                <p class="para text">learn@toppergrade.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="top-nav-search-option">
            <form>
              <input type="search" placeholder="Enter Courses" />
              <button class="search-btn-nav" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!--==============================
      Sticky Wrapper
    ==============================--> */}
  <div class="sticky-wrapper">
    <div class="menu-area">
      <div class="container">
        <div class="menu-area-content">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <nav class="main-menu d-none d-lg-inline-block">
                <ul>
                  <li class="">
                    <a href="#">Spoken</a>
                    <ul class="sub-menu">
                      <li>
                      <a href="courses-grid.html">English</a>
                      
                      </li>
                      <li><a href="courses-list.html">Spanish</a></li>
                      <li><a href="courses-details.html">French</a></li>
                      <li><a href="courses-details.html">German</a></li>
                      <li><a href="courses-details.html">Mandarin Chinese</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">Classes</a>

                    <ul class="sub-menu">
                      <li><a href="courses-grid.html">Class 6</a>
                      <ul class="sub-menu">
                      <li><a href="courses-grid.html">Mathematics</a></li>
                      <li><a href="courses-list.html">Science</a></li>
                      <li><a href="courses-details.html">English</a></li>
                      <li><a href="courses-details.html">Social Science</a></li>
                      <li><a href="courses-details.html">Hindi</a></li>
                      <li><a href="courses-details.html">Optional Subjects</a></li>
                    </ul>
                      </li>
                      <li><a href="courses-grid.html">Class 7</a>
                      <ul class="sub-menu">
                      <li><a href="courses-grid.html">Mathematics</a></li>
                      <li><a href="courses-list.html">Science</a></li>
                      <li><a href="courses-details.html">English</a></li>
                      <li><a href="courses-details.html">Social Science</a></li>
                      <li><a href="courses-details.html">Hindi</a></li>
                      <li><a href="courses-details.html">Optional Subjects</a></li>
                    </ul>
                      </li>

                      <li><a href="courses-grid.html">Class 8</a>
                      <ul class="sub-menu">
                      <li><a href="courses-grid.html">Mathematics</a></li>
                      <li><a href="courses-list.html">Science</a></li>
                      <li><a href="courses-details.html">English</a></li>
                      <li><a href="courses-details.html">Social Science</a></li>
                      <li><a href="courses-details.html">Hindi</a></li>
                      <li><a href="courses-details.html">Optional Subjects</a></li>
                    </ul>
                      </li>
                      <li><a href="courses-grid.html">Class 9</a>
                      <ul class="sub-menu">
                      <li><a href="courses-grid.html">Mathematics</a></li>
                      <li><a href="courses-list.html">Science</a></li>
                      <li><a href="courses-details.html">English</a></li>
                      <li><a href="courses-details.html">Social Science</a></li>
                      <li><a href="courses-details.html">Hindi</a></li>
                      <li><a href="courses-details.html">Optional Subjects</a></li>
                    </ul>
                      </li>
                      <li><a href="courses-grid.html">Class 10</a>
                      <ul class="sub-menu">
                      <li><a href="courses-grid.html">Mathematics</a></li>
                      <li><a href="courses-list.html">Science</a></li>
                      <li><a href="courses-details.html">English</a></li>
                      <li><a href="courses-details.html">Social Science</a></li>
                      <li><a href="courses-details.html">Hindi</a></li>
                      <li><a href="courses-details.html">Optional Subjects</a></li>
                    </ul>
                      </li>

                      <li><a href="courses-grid.html">Class 11</a>
                      <ul class="sub-menu">
                      <li><a href="courses-grid.html">Mathematics</a></li>
                      <li><a href="courses-list.html">Science</a></li>
                      <li><a href="courses-details.html">English</a></li>
                      <li><a href="courses-details.html">Social Science</a></li>
                      <li><a href="courses-details.html">Hindi</a></li>
                      <li><a href="courses-details.html">Optional Subjects</a></li>
                    </ul>
                      </li>

                      <li><a href="courses-grid.html">Class 12</a>
                      <ul class="sub-menu">
                      <li><a href="courses-grid.html">Science</a></li>
                      <li><a href="courses-list.html">Commerce</a></li>
                      <li><a href="courses-details.html">Humanities</a></li>
            
                    </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <li class="">
                    <a href="#">Ug/Pg Courses</a>
                    <ul class="sub-menu">
                      <li><a href="courses-grid.html">Courses Grid</a></li>
                      <li><a href="courses-list.html">Courses list</a></li>
                      <li><a href="courses-details.html">Courses Details</a></li>
                    </ul>
                  </li> */}
                  <li class="">
                    <a href="#contact">Contact Us</a>
                    
                  </li>
                  {/* <li class="">
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div class="col-auto">
              <div class="menu-area-right-content">
                <ul class="menu-social">
                  <li>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                  </li>
                </ul>
                <div class="menu-contact-number">
                  <a href="#" class="contact-number">+91 63788 24125</a>
                </div>
                <div class="all-btn">
                  <a href="contact.html" class="btn-p v3">
                    Become a Teacher
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!--==============================
      Mobile Menu Wrapper
    ==============================--> */}
  <div class="mobile-menu-wrapper ">
    <div class="mobile-menu-area text-center">
      <button class="menu-toggle" onClick={showmenu}><i class="fa-solid fa-xmark"></i></button>
      <div class="mobile-logo">
        <a href="index.html"><img src={logo} style={{width:"130px"}} alt="Edupls-icon" /></a>
      </div>
      <div class="mobile-menu">
        <ul>
          <li class="menu-item-has-children">
            <a title="New Demo" href="#">Home</a>
            <ul class="sub-menu">
              <li class="menu-item-has-children">
                <a href="index.html">Home One</a>
              </li>
              <li class="menu-item-has-children">
                <a href="index-2.html">Home Two</a>
              </li>
              <li class="menu-item-has-children">
                <a href="index-3.html">Home Three</a>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="about-us.html">About</a>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Courses</a>
            <ul class="sub-menu">
              <li><a href="courses-grid.html">Courses Grid</a></li>
              <li><a href="courses-list.html">Courses List</a></li>
              <li><a href="courses-details.html">Courses Details</a></li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li><a href="pricing-plan.html">Pricing Plan</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="team-details.html">Team Details</a></li>
              <li><a href="event.html">Event</a></li>
              <li><a href="event-details.html">Event Details</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Blog</a>
            <ul class="sub-menu">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>

          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header
