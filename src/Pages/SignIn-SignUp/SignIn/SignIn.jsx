import React, { useContext } from "react";
// import signUp from "../../../assets/images/login/login.svg";
import facebook from "../../../assets/images/login/Facebook.png";
import google from "../../../assets/images/login/Google.png";
import linkedin from "../../../assets/images/login/Group 25.png";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/UseContext";
const SignIn = () => {
  // user context
  const { signInEmail, googleLogin, facebookLogin } = useContext(authContext);

  const handleFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    form.reset();
  };
  // Google Login
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

  //Facebook Login
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  return (
    <div className="signUp-container ">
      <div>{/* <img src={signUp} alt="" /> */}</div>
      <div>
        <form onSubmit={handleFormData}>
          <h1>Login</h1>
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            placeholder="your email"
            id=""
          />{" "}
          <br />
          <label htmlFor="">Confirm Password</label> <br />
          <input
            type="password"
            name="password"
            placeholder="your password"
            id=""
          />
          <input type="submit" className="signUp-btn" value="sign in" />
          <p className="text-center">Or Sign Up with</p>
          <div className="flex justify-center mt-7 mb-4">
            <img
              onClick={handleFacebookLogin}
              src={facebook}
              alt=""
              style={{ cursor: "pointer" }}
            />
            <img src={linkedin} alt="" className="mx-4 " />
            <img
              onClick={handleGoogleLoing}
              src={google}
              alt=""
              style={{ cursor: "pointer" }}
            />
          </div>
          <p className="text-center">
            Create New account? <Link to="/signUp">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
