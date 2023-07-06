import { useState } from "react";
import style from "./auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
// import loginImg from "../../assets/login.png";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import spinnerImg from "../../../assets/images/spinner.jpg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();



  const loginUser = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setLoading(false);
        // toast.success("Login Successful");
        setEmail("")
        setPassword("")
        navigate("/");
      })
      .catch((error) => {
        // toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      {/* <ToastContainer /> */}
      {loading && (
        <div className="loading-container">
           <img
              src={spinnerImg}
            />
        </div>
      )}
      <section className={`container ${style.auth}`}>
        {/* <div className={style.img}>
          <img src={loginImg} alt="Login" style={{ width: "400px" }} />
        </div> */}
        <div className={style.form}>
          <h2>Admin Login</h2>
          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
            <div className="links">
              <Link to="/reset">Reset Password</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
