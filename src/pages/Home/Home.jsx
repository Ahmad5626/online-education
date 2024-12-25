import React from 'react'
import banner from '../../component/assets/img/banner/banner-img.png'
import bannerimgbgcircle from '../../component/assets/img/banner/banner-img-bg-circle.png'
import congratulations from '../../component/assets/img/banner/congratulations.svg'
import students from '../../component/assets/img/banner/students.svg'
import bannerbgright from '../../component/assets/img/banner/banner-bg-right.png'
import bannerbgleft from '../../component/assets/img/banner/banner-bg-left.png'
import student_1 from '../../component/assets/img/banner/student-img-1.png'
import student_2 from '../../component/assets/img/banner/student-img-2.png'
import student_3 from '../../component/assets/img/banner/student-img-3.png'
import student_4 from '../../component/assets/img/banner/student-img-4.png'
import bannerinteractivecourses from '../../component/assets/img/banner/banner-interactive-courses.svg'

// aboutus img
import about_img_1 from '../../component/assets/img/about-us/img-1.jpg'
import about_img_2 from '../../component/assets/img/about-us/img-2.jpg'
import aword_img_1 from '../../component/assets/img/about-us/award-img-1.jpg'
import aword_img_2 from '../../component/assets/img/about-us/award-img-2.jpg'


// how it work
import middle_image_circle from '../../component/assets/img/how-it-work/middle-image-circle.png'
import middle_image from '../../component/assets/img/how-it-work/middle-image.png'

// why choose us
import background_img_why_choose from '../../component/assets/img/why-choose-us/background-img.png'


// team member
import team_member_1 from '../../component/assets/img/our-best-team/team-member-img-1.jpg'
import team_member_2 from '../../component/assets/img/our-best-team/team-member-img-2.jpg'
import team_member_3 from '../../component/assets/img/our-best-team/team-member-img-3.jpg'

// feedback img 
import feedback_left from '../../component/assets/img/student-feedback/feedback-big-img.jpg'
import feedback_right from '../../component/assets/img/student-feedback/feedback-right-bg.png'

// get free now

import student_img from '../../component/assets/img/get-free-now/student-img.png'

import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
const Home = () => {
  return (
    <div>
    <Header/>
       <section class="banner v1">
    <div class="container container-fluid-sm">
        <div class="banner-content v1">
            <div class="row">
                <div class="col-xl-7 col-lg-12">
                    <div class="section-title">
                        <div class="section-title-inner">
                            <h4 class="sub-titlev2" data-aos="fade-down" data-aos-duration="1000"><span>35%
                                    Off</span>Learn from today</h4>
                            <h2 class="big-title s-color-white" data-aos="fade-up" data-aos-duration="1000">Featured
                                Courses Our Online Class.</h2>
                            <p class="title-para sp-color-white" data-aos="fade-up" data-aos-duration="1000">We believe
                                that with the right guidance, support, and mindset, you can accomplish anything you set
                                your</p>
                        </div>
                    </div>
                    <div class="play-data v1" data-aos="fade-up" data-aos-duration="1000">
                        <div class="all-btn">
                            <a href="contact.html" class="btn-p v1 btn-blue2 rounded icon-v1">Make Appointment</a>
                        </div>
                     
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="banner-right-content">
                        <div class="banner-img">
                            <img src={banner} alt="banner-img"/>
                        </div>
                        <div class="banner-img-bg-circle" id="banner-img-bg-circle">
                            <img src={bannerimgbgcircle} alt="banner-img-bg-circle"/>
                        </div>
                        <div class="banner-congratulations">
                            <div class="congratulations-icon">
                                <img src={congratulations} alt="congratulations-icon"/>
                            </div>
                            <div class="congratulations-content">
                                <h4 class="title text">Congratulations</h4>
                                <p class="para text">You have successfully completed this Course</p>
                            </div>
                        </div>
                        <div class="interactive-courses">
                            <div class="courses-icon">
                                <img src={bannerinteractivecourses}
                                    alt="banner-interactive-courses-icon"/>
                            </div>
                            <div class="courses-content">
                                <h4 class="title"><span class="counter">10,000</span>+</h4>
                                <p class="para text">Interactive Courses</p>
                            </div>
                        </div>
                        <div class="students" data-aos="fade-up" data-aos-duration="1000">
                            <div class="students-icon">
                                <h5 class="text title"><span class="counter">40</span>k Students</h5>
                                <img src={students} alt="banner-interactive-courses-icon"/>
                            </div>
                            <ul class="students-imgages">
                                <li>
                                    <a href="team-details.html"><img src={student_1}
                                            alt="student-img"/></a>
                                </li>
                                <li>
                                    <a href="team-details.html"><img src={student_2}
                                            alt="student-img"/></a>
                                </li>
                                <li>
                                    <a href="team-details.html"><img src={student_3}
                                            alt="student-img"/></a>
                                </li>
                                <li>
                                    <a href="team-details.html"><img src={student_4}
                                            alt="student-img"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-bg-left">
        <img src={bannerbgleft} alt="banner-bg-left"/>
    </div>
    <div class="banner-bg-right">
        <img src={bannerbgright} alt="banner-bg-right"/>
    </div>
    <div class="messenger-icon">
        <i class="my-icon icon-messenger-icon"></i>
    </div>
</section>
  
    <section class="about-us v1 my-120 @">
  <div class="container-lg">
    <div class="about-us-content v1">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <ul class="about-left-content">
            <li class="content-img-1" data-aos="fade-up" data-aos-duration="1500">
              <img src={about_img_1} alt="about-img" />
            </li>
            <li class="content-box-1">
              <div class="box-icon">
                <i class="fa fa-user"></i>
              </div>
              <h4 class="title">25+ Years Working Experience</h4>
            </li>
            <li class="content-box-2">
              <div class="box-icon">
              <i class="fa fa-user"></i>
              </div>
              <h4 class="title">25+ Years Working Experience</h4>
            </li>
            <li class="content-img-2" data-aos="fade-up" data-aos-duration="1500">
              <img src={about_img_2} alt="about-img" />
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="about-right-content">
            <div class="section-title start">
              <div class="section-title-inner start">
                <h4 class="sub-title" data-aos="fade-down" data-aos-duration="1000">More About Us</h4>
                <h2 class="big-title s-color-black" data-aos="fade-up" data-aos-duration="1000">
                  We the focus and offerin your education platform.
                </h2>
              </div>
            </div>
            <ul class="awards">
              <li data-aos="fade-left" data-aos-duration="1000">
                <div class="award-img">
                  <img
                    src={aword_img_1}
                    alt="award-img"
                  />
                </div>
                <div class="award-content">
                  <h3 class="award-data"><span class="counter">1958</span></h3>
                  <h4 class="award-title">World Education Award</h4>
                  <p class="award-para text">
                    Teachers play a critical role in education by instructing
                    and guiding students,
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" data-aos-duration="1000">
                <div class="award-img">
                  <img
                    src={aword_img_2}
                    alt="award-img"
                  />
                </div>
                <div class="award-content">
                  <h3 class="award-data"><span class="counter">1999</span></h3>
                  <h4 class="award-title">Global Luminary Award</h4>
                  <p class="award-para text">
                    Teachers play a critical role in education by instructing
                    and guiding students,
                  </p>
                </div>
              </li>
            </ul>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div class="left-vector-img">
    <img src="assets/img/about-us/bg-vactor-left.png" alt="bg-vactor-left" />
  </div>
  <div class="right-vector-img">
    <img src="assets/img/about-us/bg-vacator-right.png" alt="bg-vactor-right" />
  </div> */}
</section>

   
    <section class="how-it-work v1 @ py-120">
    <div class="container">
        <div class="section-title center">
            <div class="section-title-inner center w-v3">
                <h4 class="sub-title" data-aos="fade-down" data-aos-duration="2000">hOW it wORK</h4>
                <h2 class="big-title s-color-black" data-aos="fade-up" data-aos-duration="2000">We the focus and offerin
                    your education platform.</h2>
            </div>
        </div>
        <div class="how-it-work-content v1">
            <div class="work-content-1">
                <h4 class="work-title">Programs and Courses</h4>
                <p class="work-para">Engage with a vibrant community of learners, and professionals</p>
                <div class="work-icon">
                    <i class="my-icon icon-programs-courses"></i>
                </div>
            </div>
            <div class="work-content-2">
                <h4 class="work-title text">Educational Resources</h4>
                <p class="work-para text">Engage with a vibrant community of learners, and professionals</p>
                <div class="work-icon">
                    <i class="my-icon icon-education-resources"></i>
                </div>
            </div>
            <div class="work-content-3">
                <h4 class="work-title text">Skill Development for IT</h4>
                <p class="work-para text">Engage with a vibrant community of learners, and professionals</p>
                <div class="work-icon">
                    <i class="my-icon icon-skill-dev-for-it"></i>
                </div>
            </div>
            <div class="work-content-4">
                <h4 class="work-title text">Technology and IT</h4>
                <p class="work-para text">Engage with a vibrant community of learners, and professionals</p>
                <div class="work-icon">
                    <i class="my-icon icon-technology-and-it"></i>
                </div>
            </div>
            <div class="work-content-1">
                <h4 class="work-title text">Career Development</h4>
                <p class="work-para text">Engage with a vibrant community of learners, and professionals</p>
                <div class="work-icon">
                    <i class="my-icon icon-career-dev"></i>
                </div>
            </div>
            <div class="work-content-2">
                <h4 class="work-title text">Community and Events</h4>
                <p class="work-para text">Engage with a vibrant community of learners, and professionals</p>
                <div class="work-icon">
                    <i class="my-icon icon-community-and-events"></i>
                </div>
            </div>

            <div class="middle-img-circle ">
                <img src={middle_image_circle} alt="middle-img-circle" className='middle-img-bg-circle'/>
            </div>
            <div class="middle-img">
                <img src={middle_image} alt="middle-img"/>
            </div>
        </div>
    </div>
</section>
    <section class="cta v1 py-120 @">
    <div class="container">
        <div class="cta-title">
            <div class="title-content">
                <p class="title-para" data-aos="fade-down" data-aos-duration="1500">We are here to answer your questions
                    24/7</p>
                <h2 class="big-title" data-aos="fade-up" data-aos-duration="1500">Need A Consultation?</h2>
            </div>
            <div class="all-btn mt-15" data-aos="fade-up" data-aos-duration="1000">
                <a href="#" class="btn-p v1 btn-blue2 rounded-full">Let's Get Started</a>
            </div>
        </div>
    </div>
  

</section>
    <section class="why-choose-us v1 my-120 @">

  <div class="choose-us-slide">
    <h2 class="choose-us-slide-text v1 text">ONLINE CLASS </h2>
    <h2 class="choose-us-slide-text text">Courses CLASS</h2>
    <h2 class="choose-us-slide-text v2 text">ONLINE CLASS </h2>
    <h2 class="choose-us-slide-text v1 text">ONLINE CLASS </h2>
    <h2 class="choose-us-slide-text text">Courses CLASS</h2>
    <h2 class="choose-us-slide-text v2 text">ONLINE CLASS </h2>
    <h2 class="choose-us-slide-text v1 text">ONLINE CLASS </h2>
    <h2 class="choose-us-slide-text text">Courses CLASS</h2>
    <h2 class="choose-us-slide-text v2 text">ONLINE CLASS </h2>
  </div>
  <div class="why-choose-us-background-img">
    <img src={background_img_why_choose} alt="background-img"/>
  </div>
</section>
    <section class="our-best-team v1 @ py-120">
    <div class="container">
        <div class="section-title">
            <div class="section-title-inner">
                <h4 class="sub-title" data-aos="fade-down" data-aos-duration="1500">our best team</h4>
                <h2 class="big-title s-color-white" data-aos="fade-up" data-aos-duration="1500">Our Most Popular
                    Instructor</h2>
            </div>
        </div>
        <div class="our-best-team-content v1">
            <div class="row">
                <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <div class="team-img">
                        <img src={team_member_1}  alt="team-member-img"/>
                        <div class="team-content">
                            <div class="left-data">
                                <h4 class="team-title"><a href="team-details.html">kmane usman</a></h4>
                                <p class="team-para">Head of physics</p>
                            </div>
                            <div class="team-share-box">
                             
                                <ul>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-skype"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                    <div class="team-img">
                        <img src={team_member_2} alt="team-member-img"/>
                        <div class="team-content">
                            <div class="left-data">
                                <h4 class="team-title"><a href="team-details.html">kman usman</a></h4>
                                <p class="team-para">Head of physics</p>
                            </div>
                            <div class="team-share-box">
                            
                                <ul>
                                    <li>
                                        <a href="#" class="social">
                                          <i className='fa fa-facebook'></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-skype"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    <div class="team-img">
                        <img src={team_member_3} alt="team-member-img"/>
                        <div class="team-content">
                            <div class="left-data">
                                <h4 class="team-title"><a href="team-details.html">kman usman</a></h4>
                                <p class="team-para">Head of physics</p>
                            </div>
                            <div class="team-share-box">
                             
                                <ul>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" class="social">
                                            <i class="my-icon icon-skype"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    <section class="my-120 @">
    <div class="container">
        <div class="student-feedback-content">
            <div class="row">
                <div class="col-lg-5">
                    <div class="feedback-left-content">
                        <div class="feedback-left-img" data-aos="zoom-in-up" data-aos-duration="2000">
                            <img src={feedback_left} alt="feedback-big-img"/>
                        </div>
                        {/* <div class="feedback-right-bg-img">
                            <img src={feedback_left} alt="feedback-left-bg-img"/>
                        </div> */}
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="feedback-right-content">
                        <div class="section-title">
                            <div class="section-title-inner">
                                <h4 class="sub-title" data-aos="fade-down" data-aos-duration="1500">Student Feedback
                                </h4>
                                <h2 class="big-title s-color-black" data-aos="fade-up" data-aos-duration="1500">Our
                                    Student feedback</h2>
                            </div>
                        </div>
                        <div class="swiper my-swiper-student-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="student-feedback-info">
                                        <div class="student-profile">
                                            <div class="student-img">
                                                <img src="assets/img/student-feedback/student-img-1.jpg"
                                                    alt="student-img"/>
                                            </div>
                                            <div class="student-content">
                                                <h4 class="content-title">By David Smith</h4>
                                                <p class="content-para">Chemistry Student</p>
                                            </div>
                                        </div>
                                        <p class="info-para">"I found the education website incredibly helpful and
                                            user-friendly. The content is well-organized, making it easy to navigate and
                                            locate relevant resources quickly. The interactive quizzes and video
                                            tutorials
                                            greatly enhanced my understanding of the subjects. Overall, it's a fantastic
                                            platform for enhancing my learning experience."</p>
                                        <ul class="star">
                                            <li class="color-blue"><i class="my-icon icon-star"></i></li>
                                            <li class="color-blue"><i class="my-icon icon-star"></i></li>
                                            <li class="color-blue"><i class="my-icon icon-star"></i></li>
                                            <li class="color-grey"><i class="my-icon icon-star"></i></li>
                                            <li class="color-grey"><i class="my-icon icon-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="student-feedback-info">
                                        <div class="student-profile">
                                            <div class="student-img">
                                                <img src="assets/img/student-feedback/student-img-1.jpg"
                                                    alt="student-img"/>
                                            </div>
                                            <div class="student-content">
                                                <h4 class="content-title">By David Smith</h4>
                                                <p class="content-para">Chemistry Student</p>
                                            </div>
                                        </div>
                                        <p class="info-para">"I found the education website incredibly helpful and
                                            user-friendly. The content is well-organized, making it easy to navigate and
                                            locate relevant resources quickly. The interactive quizzes and video
                                            tutorials
                                            greatly enhanced my understanding of the subjects. Overall, it's a fantastic
                                            platform for enhancing my learning experience."</p>
                                        <ul class="star">
                                            <li class="color-blue"><i class="my-icon icon-star"></i></li>
                                            <li class="color-blue"><i class="my-icon icon-star"></i></li>
                                            <li class="color-blue"><i class="my-icon icon-star"></i></li>
                                            <li class="color-grey"><i class="my-icon icon-star"></i></li>
                                            <li class="color-grey"><i class="my-icon icon-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="feedback-right-bg">
                            <img src={feedback_right} alt="feedback-right-img"/>
                        </div>
                        <div class="quat-big-icon">
                            <i class="my-icon icon-quote"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    <section class="register-now" id="contact">
    
    <div class="container">
      
        <div class="get-free-now v1">
  <div class="get-free-content">
    <div class="row">
      <div class="col-lg-5">
        <div class="get-free-left-content" data-aos="zoom-in-up" data-aos-duration="2500">
          <img src={ student_img} alt="student-img" />
        </div>
      </div>
      <div class="col-lg-7">
        <div class="get-free-right-content">
          <div class="section-title">
            <div class="section-title-inner">
              <h4 class="sub-title" data-aos="fade-down" data-aos-duration="1500">Get Free Now</h4>
              <h2 class="big-title s-color-black" data-aos="fade-up" data-aos-duration="1500"> Register Now & Get Free
                Courses Online</h2>
              <p class="title-para sp-color-black" data-aos="fade-up" data-aos-duration="1500">
                Education for sit amet, consectetur adipiscing elit. Morbi
                obortis ligula euismod sededesty am augue nisl.is very kind
                off corn
              </p>
            </div>
          </div>
          <form class="get-free-form-content">
            <div class="group-form-box">
              <div class="form-box">
                <input type="text" placeholder="Your Name" />
              </div>
              <div class="form-box">
                <input type="email" placeholder="Email Address" />
              </div>
            </div>
            <div class="form-box">
              <input type="text" placeholder="Select Subject" />
            </div>
            <div class="form-box-last">
              <textarea cols="30" rows="10" placeholder="Type Your Message"></textarea>
            </div>
            <div class="check-box">
              <div class="all-btn">
                <button class="btn-p v1 rounded btn-blue" type="submit">
                  Send Here
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="background-big-img">
        <img src="assets/img/register-now/background-img.png" alt="background-img"/>
    </div>
</section>
  
    
    <div class="my-120">

</div>
<Footer/>
    </div>
  )
}

export default Home
