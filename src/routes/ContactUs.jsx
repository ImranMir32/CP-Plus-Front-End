import React, { useEffect } from "react";
import "../styles/style.css";
import "../styles/contactus.css";
import { useFormik } from "formik";
import { contactUsSchema } from "../schemas/schemas";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  console.log("ok");
  console.log(JSON.stringify(values));

  //   let result = await fetch("http://localhost:4000/api/users/login", {
  //     method: "POST",
  //     body: JSON.stringify(values),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   result = await result.json();
  //   console.log(result);
  //   actions.resetForm();
  //   if (result.access_token) window.location.href = "/";
  //   else {
  //     toast.error("Wrong email or password !", {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
  actions.resetForm();
  toast.success("Send Message!", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
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
      phone: "",
      // message: "",
    },
    validationSchema: contactUsSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <>
      <Navbar />
      <div class="contact-container">
        <h1>Contact Us</h1>
        <div class="column">
          <form class="login form" onSubmit={handleSubmit} autoComplete="off">
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

            {/* Mobile number */}
            <label htmlFor="phone">Phone number</label>
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

            {/* Mobile number
            <label htmlFor="message">Message</label>
            <input
              value={values.message}
              onChange={handleChange}
              id="message"
              type="text"
              //   placeholder="Enter your Mobile number"
              onBlur={handleBlur}
              className={errors.message && touched.message ? "input-error" : ""}
            />
            {errors.message && touched.message && (
              <p className="error">{errors.message}</p>
            )} */}
            {/* <form onSubmit={handleSubmit}> */}
            <textarea
              className="message-input"
              placeholder="Type your message here..."
              // value={values.message}
              // onChange={handleInputChange}
            />
            {/* <button type="submit">Send</button> */}
            {/* </form> */}

            <button disabled={isSubmitting} type="submit" class="button">
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ContactUs;
