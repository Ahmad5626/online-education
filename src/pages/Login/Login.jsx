import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'

const Login = () => {
  return (
    <div>
    <Header/>
    <section class="breadcum">
<div class="container">
    <div class="breadcum-content">
        <h2 class="title">Log In</h2>
        <h4 class="para"><a href="index.html">Home</a> / Log In</h4>
    </div>
</div>
</section>
<section class="login-section">
   <div class="signin">
      
      <div class="content">
         <h2 class="login-title">Log In</h2>
         <div class="form">
            <div class="inputBox">
               <input type="text" placeholder="Email" required/>
            </div>
            <div class="inputBox">
               <input type="text" placeholder="Password" required/>
            </div>
            <div class="links"> <a href="#">Forgot Password</a> <a href="sign-up.html">Signup</a>
            </div>
            <div class="all-btn v2">
               <a href="#" class="btn-p btn-blue v1 rounded">Log in Now</a>
            </div>
         </div>
      </div>

   </div>

</section>
      <Footer/>
    </div>
  )
}

export default Login
