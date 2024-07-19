import React from 'react'
import './CSS/loginsignup.css'
const LoginSinup = () => {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-conatiner">
        <h1>sign Up</h1>
        <div className="loginsignup-fields">

          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='password' />
        </div>
       
 <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing .i agree to term of use & privacy  policy</p>

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?  <span>Login here</span></p>
       
      </div>
    </div>
  )
}

export default LoginSinup