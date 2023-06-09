import React, { useEffect, useRef } from "react";
import "../styles/style.css";
import "../styles/contactus.css";

// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Input } from "@material-ui/core";
// import { Input } from "@material-ui/core";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4ch7u1",
        "template_6410oas",
        form.current,
        "p2m_dLhVVqi6U-zfq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const showToastMessage = () => {
    toast.success("Successfully send !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // console.log(errors);

  return (
    <>
      <Navbar />
      <div class="contact-container">
        <h1>Contact Us</h1>
        <div class="column">
          <form
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
            class="login form"
          >
            {/* <form  onSubmit={handleSubmit} > */}
            <label htmlFor="name">Name</label>
            <input
              // value={values.name}
              // onChange={handleChange}
              id="name"
              name="user_name"
              type="text"
              placeholder="Enter your name"
              // onBlur={handleBlur}
              className=""
            />

            <label htmlFor="email">Email</label>
            <input
              // value={values.email}
              // onChange={handleChange}
              id="email"
              name="user_email"
              type="email"
              placeholder="Enter your email"
              // onBlur={handleBlur}
              className=""
            />

            {/* text area */}
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              type="textarea"
              placeholder="Type your message here..."
              className="message-input"
            />

            <button
              type="submit"
              value="Send"
              onClick={showToastMessage}
              class="button"
            >
              Submit
            </button>

            {/* <button disabled={isSubmitting} type="submit" >
              Submit
            </button> */}
            <ToastContainer />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ContactUs;
