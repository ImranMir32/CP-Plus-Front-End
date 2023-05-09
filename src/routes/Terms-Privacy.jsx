import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/terms.css";

const TermsPrivacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  return (
    <>
      <Navbar />
      <div className="box-terms">
        <div className="box-content-terms">
          <h3>Accepting these Terms and Privacy policy</h3>
          <p>
            Please read and agree to all the terms below before using the
            Service. If any term is unclear, please email us for clarification.
            If you do not agree to all the terms, please refrain from using the
            Service.
          </p>
          <h3>Information we collect</h3>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.{" "}
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, email address.
          </p>
          <h3>How we use your information</h3>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <p>
            <ul>
              <li>
                Provide, operate, and maintain our website: This refers to the
                core function of the website, which is to make it available,
                functioning, and accessible to users.
              </li>
              <li>
                Improve, personalize, and expand our website: This involves
                enhancing the website's features and functionality to provide a
                better user experience. It may also involve personalizing
                content based on user preferences.
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners: This involves reaching out to users to provide
                updates, support, and other relevant information related to the
                website.
              </li>
              <li>
                Develop new products, services, features, and functionality:
                This involves using insights gained from analyzing user behavior
                and feedback to create new products, services, features, and
                functionality that better meet user needs.
              </li>
              <li>
                Send you emails: This is a specific communication channel that
                may be used to provide updates, promotions, and other
                information to users.
              </li>
              <li>
                Understand and analyze how you use our website: This involves
                collecting and analyzing data on how users interact with the
                website to identify areas for improvement and to better
                understand user behavior.
              </li>
              <li>
                Find and prevent fraud: This involves using tools and techniques
                to detect and prevent fraudulent activity on the website, such
                as fake accounts, payment fraud, or spam.
              </li>
            </ul>
          </p>
          <h3>Data retention policy for personal information</h3>
          <p>
            CP++ will keep Your Personal Data only as long as necessary for the
            stated purposes. We'll retain and use it to comply with legal
            obligations, resolve disputes, and enforce agreements. We'll also
            retain Usage Data for internal analysis, security, and functionality
            improvement, unless legally required to keep it longer.
          </p>
          <h3>Copyright Complaints</h3>
          <p>
            We take intellectual property rights seriously. In accordance with
            the Digital Millennium Copyright Act ("DMCA") and other applicable
            law, we have adopted a policy of terminating, in appropriate
            circumstances and, at our sole discretion, access to the service for
            users who are deemed to be repeat infringers.
          </p>
          <h3>Feedback Us</h3>
          <p>
            Please let us know what you think of the Service, these Terms and,
            in general, CP++. When you provide us with any feedback, comments or
            suggestions about the Service, these Terms and, in general, CP++ ,
            you irrevocably assign to us all of your right, title and interest
            in and to your feedback, comments and suggestions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPrivacy;
