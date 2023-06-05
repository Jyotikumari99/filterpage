import React from "react";

export default function Login() {
  return (
    <div className="login-main">
      <h1 className="heading">Login to Plants Board</h1>
      <p className="para">Welcome back! Please enter your details.</p>
      <div className="login">
        <lable className="lableName" for="email">
          Email/Phone
        </lable>
        <br />
        <input className="box" placeholder="Enter your email/phone" />
        <br />
        <lable className="lableName" for="password">
          Password/OTP
        </lable>
        <br />
        <input className="box" placeholder="••••••••" />
        <br />
        <img className="imgg" src="/images/checkbox.png" alt="checkbox" />
        <p className="remember">Remember for 30 days</p>
        <a href="Forgotpass.com" alt="forgotPass">
          Forgot password
        </a>

        <br />
        <button className="signin">Sign in</button>
        <br />
        <img className="goo" src="/images/Google.png" alt="checkbox" />

        <button className="signgoo">Sign in with Google</button>
        <br />
        <div className="dontpos">
          
          <p className="dont">Don’t have an account?</p>
          <a className="signup" href="signup.com">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
