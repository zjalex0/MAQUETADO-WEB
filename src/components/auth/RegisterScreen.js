import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { startRegister } from "../../actions/auth";

import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== password2) {
      return Swal.fire("Error", "Las contraseñas deben ser iguales", "error");
    }
    dispatch(startRegister(email, password, name));
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
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
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      autoComplete="off"
                      value={name}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
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
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="password2"
                      className="form-control"
                      value={password2}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn fs-4 btn-primary text-uppercase fw-bold"
                      type="submit"
                    >
                      Register
                      <i className="fas fa-edit ms-4"></i>
                    </button>
                  </div>

                  <div className="d-grid">
                    <Link to="/login" className="link">
                      Already registered?
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
