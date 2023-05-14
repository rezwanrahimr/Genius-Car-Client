import React, { useContext } from "react";
// import signUp from "../../../assets/images/login/login.svg";
import facebook from "../../../assets/images/login/Facebook.png";
import google from "../../../assets/images/login/Google.png";
import linkedin from "../../../assets/images/login/Group 25.png";
import "./signUp.css";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/UseContext";

const SignUp = () => {
  // Context
  const { createUserWithEmail, googleLogin } = useContext(authContext);
  const handleFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // Create User WIth Email and Password.
    createUserWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    form.reset();
  };

  // Google Login.
  const handleGoogleLoing = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
      });
  };
  return (
    <div className="signUp-container ">
      <div>{/* <img src={signUp} alt="" /> */}</div>
      <div>
        <form onSubmit={handleFormData}>
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
          <input type="submit" className="submit-btn" value="sign up" />
          <p className="text-center">Or Sign Up with</p>
          <div className="flex justify-center mt-7 mb-4">
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" className="mx-4 " />
            <img
              onClick={handleGoogleLoing}
              src={google}
              alt=""
              style={{ cursor: "pointer" }}
            />
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
