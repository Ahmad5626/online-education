import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'

const Signup = () => {
  return (
    <div>
    <Header/>
      <section class="breadcum">
<div class="container">
    <div class="breadcum-content">
        <h2 class="title">Sign Up</h2>
        <h4 class="para"><a href="index.html">Home</a> / Sign Up</h4>
    </div>
</div>
</section>
<section class="login-section">

   <div class="signin">

      <div class="content">

         <h2 class="login-title">Sign Up</h2>

         <div class="form">

            <div class="inputBox">

               <input type="text" placeholder="First Name" required/>

            </div>
            <div class="inputBox">

               <input type="text" placeholder="Last Name" required/>

            </div>

            <div class="inputBox">

               <input type="password" placeholder="Password" required/>

            </div>
            <div class="inputBox">

               <input type="password" placeholder="Confirm Password" required/>

            </div>

            <div class="links"> <a href="#">Forgot Password</a> <a href="login.html">Login</a>

            </div>
            <div class="all-btn v2">
               <a href="#" class="btn-p btn-blue v1 rounded">Sign Up Now</a>
            </div>

         </div>

      </div>

   </div>

</section>
<Footer/>
    </div>
  )
}

export default Signup
