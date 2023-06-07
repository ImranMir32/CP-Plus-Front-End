import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { useFormik } from "formik";
import { signInSchema } from "../schemas/schemas";
import imgLogin from "../assets/login.svg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "../Redux/Slice/globalSlice";

import { useDispatch, useSelector } from "react-redux";

const SigninForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  const [check, setCheck] = useState(false);
  const { token } = useSelector((state) => state.global);
  console.log(token);

  useEffect(() => {
    if (token && check) {
      setCheck(false);
      window.location.href = "/";
    } else if (check) {
      toast.error("Wrong email or password !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCheck(false);
    }
  }, [token, check]);
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    actions.resetForm();
    setCheck(true);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <>
      <Navbar />
      <main class="main">
        <div class="container">
          <h1>Login to your account</h1>
          <div class="column">
            <div class="illustration">
              <img src={imgLogin} alt="Login" />
            </div>
            <form class="login form" onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="email">Email</label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
              <button
                onClick={async () => {
                  await dispatch(signIn(values));
                }}
                disabled={isSubmitting}
                type="submit"
                class="button"
              >
                Submit
              </button>
              <ToastContainer />
              <div class="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default SigninForm;
