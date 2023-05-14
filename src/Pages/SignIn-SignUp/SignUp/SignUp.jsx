import React from "react";
import signUp from "../../../assets/images/login/login.svg";
import facebook from "../../../assets/images/login/Facebook.png";
import google from "../../../assets/images/login/Google.png";
import linkedin from "../../../assets/images/login/Group 25.png";
import "./signUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp-container ">
      <div>
        <img src={signUp} alt="" />
      </div>
      <div>
        <form>
          <h1>Sign Up</h1>
          <label htmlFor="">Name</label> <br />
          <input type="text" name="name" placeholder="your name" id="" /> <br />
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            placeholder="your email"
            id=""
          />{" "}
          <br />
          <label htmlFor="">password</label> <br />
          <input
            type="password"
            name="password"
            placeholder="your password"
            id=""
          />
          <input type="button" className="submit-btn" value="sign up" />
          <p className="text-center">Or Sign Up with</p>
          <div className="flex justify-center mt-7 mb-4">
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" className="mx-4 " />
            <img src={google} alt="" />
          </div>
          <p className="text-center">
            Already have an account? <Link to="/signIn">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
