import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import JsonUser from "../../data/Users.json";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "alejandro@gmail.com",
    password: "123456",
  });
  const { email, password } = formValues;

  if (!localStorage.getItem("JsonUsers")) {
    localStorage.setItem("JsonUsers", JSON.stringify(JsonUser));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  const handleGoogleLogin = () => {};

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Sign In
                  </h5>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      autoComplete="off"
                      value={email}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn fs-4 btn-primary text-uppercase fw-bold w-100"
                    >
                      <span>Sign in</span>
                      <i className="fas fa-sign-in-alt ms-4"></i>
                    </button>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <div className="google-btn" onClick={handleGoogleLogin}>
                      <div className="google-icon-wrapper">
                        <img
                          className="google-icon"
                          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                          alt="google button"
                        />
                      </div>
                      <p className="btn-text">
                        <b>Sign in with google</b>
                      </p>
                    </div>
                  </div>
                  <div className="d-grid">
                    <Link to="/register" className="link">
                      Create new account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
