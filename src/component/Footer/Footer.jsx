import React from 'react'
import logo from '../assets/img/logo/logo.png'
import footer_1 from '../assets/img/footer/v1/bg-left-color.png'
import footer_2 from '../assets/img/footer/v1/bg-right-color.png'
const Footer = () => {
  return (
    <div>
      <footer>
  <div class="footer-content v1">
    <div class="container-xl container-fluid-md">
      <div class="news-letter">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h3 class="title white">Subscribe To Our Newsletter</h3>
          </div>
          <div class="col-lg-6">
            <form>
              <input type="email" placeholder="Enter your email" />
              <div class="all-btn">
                <a href="#" class="btn-p btn-blue v2 rounded">Subscribe</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="footer-widget">
            <div class="footer-logo logo-img">
              <a href="#">
                <img src={logo} alt="logo" style={{width:"200px"}}/>
              </a>
            </div>
            <p class="widget-para">
              Reflect on your teaching or work is are Is performance, seek
              feedback from gat supervisors, and continuously strive to improve
              your skills
            </p>
            <ul class="footer-social-link">
              <li>
                <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="footer-widget">
            <h4 class="widget-title">Quick Links</h4>
            <ul class="quick-links">
              <li>
                <a href="#"> About Us </a>
              </li>
              <li>
                <a href="#"> Our Mission </a>
              </li>
              <li>
                <a href="#"> Meet The Teams </a>
              </li>
              <li>
                <a href="#"> Our Projects </a>
              </li>
              <li>
                <a href="#"> Contact Us </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="footer-widget ml-25">
            <h4 class="widget-title">Our Courses</h4>
            <ul class="our-courses">
              <li>
                <a href="#"> Web Development </a>
              </li>
              <li>
                <a href="#"> UI/UX Design </a>
              </li>
              <li>
                <a href="#"> Font-end Course </a>
              </li>
              <li>
                <a href="#"> Digital Marketing </a>
              </li>
              <li>
                <a href="#"> Graphics Designer </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="footer-widget">
            <h4 class="widget-title">Get In Touch</h4>
            <div class="get-in-touch">
              <ul class="contact-info-items">
                <li class="contact-info-item">
                  <div class="contact-info-icon">
                  <i class="fa fa-map-marker"></i>
                  </div>
                  <div class="contact-info-content">
                    <p class="para">Edupls location</p>
                    <h4 class="title">Marina Lane Berlin</h4>
                  </div>
                </li>
                <li class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="contact-info-content">
                    <p class="para">Email address</p>
                    <h4 class="title">edupls@gmail.com</h4>
                  </div>
                </li>
                <li class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="contact-info-content">
                    <p class="para">Phone number</p>
                    <h4 class="title">(+189) 2538-2145</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-left-color-img">
        <img src={footer_1} alt="bg-left-color" />
      </div>
      <div class="bg-right-color-img">
        <img
          src={footer_2}
          alt="bg-right-color"
        />
      </div>
    </div>
  </div>
  <div class="copyright-section v1">
    <div class="container">
      <div class="copyright-content">
        <div class="left-content">
          <p class="para">© 2023 <span>Edupls.</span> All Rights Reserved.</p>
        </div>
        <div class="right-content">
          <a href="#" class="para2">Privacy Policy</a>
          <a href="#" class="para2">Terms & Condition</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
