import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/schemas";
import imgSignUp from "../assets/signup.svg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Redux/Slice/globalSlice";

const SignupForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  const [check, setCheck] = useState(false);
  const { accountCreated } = useSelector((state) => state.global);

  useEffect(() => {
    if (accountCreated && check) {
      toast.success("Account has been created !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        window.location.href = "/signin";
      }, 2000);
    } else if (check) {
      toast.warning("Email is already used try another email !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCheck(false);
    }
  }, [accountCreated, check]);
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
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
      name: "",
      email: "",
      hackerrankId: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <>
      <Navbar />
      <main class="main">
        <div class="container">
          <h1>Create an account</h1>
          <div class="column">
            <div class="illustration">
              <img src={imgSignUp} alt="SignUp" />
            </div>
            <form class="login form" onSubmit={handleSubmit} autoComplete="off">
              {/* name */}
              <label htmlFor="name">Name</label>
              <input
                value={values.name}
                onChange={handleChange}
                id="name"
                type="text"
                placeholder="Enter your name"
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
              />
              {errors.name && touched.name && (
                <p className="error">{errors.name}</p>
              )}

              {/* email */}
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

              {/* hackerrankId */}
              <label htmlFor="hackerrankId">Hackerrank Id</label>
              <input
                value={values.hackerrankId}
                onChange={handleChange}
                id="hackerrankId"
                type="text"
                placeholder="Enter your Hackerrank Id"
                onBlur={handleBlur}
                className={
                  errors.hackerrankId && touched.hackerrankId
                    ? "input-error"
                    : ""
                }
              />
              {errors.hackerrankId && touched.hackerrankId && (
                <p className="error">{errors.hackerrankId}</p>
              )}

              {/* Mobile number */}
              <label htmlFor="phone">Mobile number</label>
              <input
                value={values.phone}
                onChange={handleChange}
                id="phone"
                type="text"
                placeholder="Enter your Mobile number"
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? "input-error" : ""}
              />
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}

              {/* passwword */}
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

              {/* confirmPasswword */}
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}

              {/* button */}
              <button
                disabled={isSubmitting}
                onClick={async () => {
                  await dispatch(signUp(values));
                  // setCheck(true);
                }}
                type="submit"
                class="button"
              >
                Submit
              </button>
              <ToastContainer />

              {/* login  */}
              <div class="info">
                Already have an account? <Link to="/signin">Login</Link>{" "}
                instead.
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignupForm;
