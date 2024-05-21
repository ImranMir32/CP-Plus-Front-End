import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/style.css";
import { useFormik } from "formik";
import { updateUsSchema } from "../../schemas/schemas";
import imgSignUp from "../../assets/signup.svg";
import Navbar from "../Navbar";
// import { Link } from "react-router-dom";
import Footer from "../Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStateContext } from "../../Context/Global_Context";
import { GlobalMethodsContext } from "../../Context/GlobalMethodsContext";

const UpdateProfile = () => {
  const { user } = useContext(GlobalStateContext);
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user]);
  const navigate = useNavigate();

  const { updateUser } = useContext(GlobalMethodsContext);

  const onSubmit = async (values, actions) => {
    console.log("values-<", values);

    const res = await updateUser(values);
    if (res === 200) {
      toast.success("Info Updated!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/user-profile");
      }, 2000);
    } else {
      toast.error("Wrong Password !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
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
      name: `${user.name}`,
      hackerrankId: `${user.hackerrankId}`,
      phone: `${user.phone}`,
      password: "",
    },
    validationSchema: updateUsSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <>
      <Navbar />
      <main class="main">
        <div class="container">
          <h1>Update Profile</h1>
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

              {/* button */}
              <button disabled={isSubmitting} type="submit" class="button">
                Submit
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

export default UpdateProfile;
