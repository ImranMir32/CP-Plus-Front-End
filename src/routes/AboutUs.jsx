import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/aboutus.css";
import imran from "../assets/imran.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  return (
    <>
      <Navbar />
      <div className="box-contact-us">
        <div className="box-content-contact-us">
          <img src={imran} alt="imran" />
          <div className="info">
            <h3>Md. Imran Mir</h3>
            <p>
              Department of CSE, University of Information Technology and
              Sciences
            </p>
            {/* <p>University of Information</p>
          <p>Technology and Sciences</p> */}
            <p>Dhaka, Bangladesh</p>
            <p className="mail">Mail : imranmir6677@gmail.com</p>
            <p>Phone : 01866078547</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
