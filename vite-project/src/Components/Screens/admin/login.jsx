import "./login.css";
import { useState } from "react";
const Login = () => {
  const [credentials, setCredentials] = useState();
  return (
    <div className=" containerr loginpg d-flex justify-content-center align-items-center ">
      <div className="form_mainn_u rounded">
        <div className="h_u">
          <h2 className="h2_u">Login.</h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              email: formData.get("email"),
              password: formData.get("password"),
            };
            setCredentials(obj);
            console.log(obj);
          }}
        >
          <div className="fields_u">
            <label htmlFor="email">
              <input
                className="inp_u"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
              />
            </label>
            <label htmlFor="password">
              <input
                className="inp_u"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
              />
            </label>
            <p className="noacc text-light">
              Dont have an account?
              <a className="create_u" href="signup.html">
                Create account
              </a>{" "}
            </p>
          </div>

          <div className="">
            <button
              type="submit"
              className="rounded btnlogin_u btn mybtn_u btn-info"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
