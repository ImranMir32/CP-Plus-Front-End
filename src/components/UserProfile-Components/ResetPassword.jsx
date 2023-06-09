import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/style.css";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../../schemas/schemas";
// import imgLogin from "../assets/login.svg";
import Navbar from "../Navbar";
import imgReset from "../../assets/reset.png";
// import { Link } from "react-router-dom";
import Footer from "../Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { GlobalStateContext } from "../../Context/Global_Context";
import { GlobalMethodsContext } from "../../Context/GlobalMethodsContext";

const ResetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  const navigate = useNavigate();
  const { resetPassword } = useContext(GlobalMethodsContext);

  const onSubmit = async (values, actions) => {
    const res = await resetPassword(values);
    if (res === 200) {
      toast.success("Password reseted!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/user-profile");
      }, 2000);
    } else {
      toast.warning("Wrong Password !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // let result = await fetch("http://localhost:4000/api/users/login", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
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
      //   email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <>
      <Navbar />
      <main class="main">
        <div class="container">
          <h1>Reset Password : </h1>
          <div class="column">
            <div class="illustration">
              <img src={imgReset} alt="Login" />
            </div>
            <form class="login form" onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="currentPasswoord">Current Password</label>
              <input
                value={values.email}
                onChange={handleChange}
                id="currentPasswoord"
                type="password"
                placeholder="Enter your Current Password"
                onBlur={handleBlur}
                className={
                  errors.currentPasswoord && touched.currentPasswoord
                    ? "input-error"
                    : ""
                }
              />
              {errors.currentPasswoord && touched.currentPasswoord && (
                <p className="error">{errors.currentPasswoord}</p>
              )}

              {/* passwword */}
              <label htmlFor="password">New Password</label>
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
              <button disabled={isSubmitting} type="submit" class="button">
                Reset Password
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default ResetPassword;
