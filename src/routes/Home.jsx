import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import "../styles/quates.css";

const Home = () => {
  const [quote, setQuote] = useState("");
  const getQuote = async () => {
    await fetch("https://cp-plus-back-end.onrender.com/api/random-quotes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="quates">
          <div className="box-content-quates">
            {/* <h1>Welcome to home page</h1> */}
            <h1>"{quote.quote}"</h1>
            <h4>-{quote.author}</h4>
            {/* <h1>"Quates"</h1>
            <h4>-author</h4> */}
          </div>
          <div className="box-content-home-text">
            <h2>
              Welcome to CP+ : Your Ultimate Competitive Programming Learning
              Platform!
            </h2>
            <p>
              At CP+, we are dedicated to helping you learn competitive
              programming from scratch to advanced levels. Our comprehensive
              learning process is divided into three stages: Beginner,
              Intermediate, and Advanced, to ensure a structured and progressive
              learning experience.
            </p>
            <p>
              Challenge Yourself: In our Challenge section, we offer exciting
              challenges to users, such as learning 15 algorithms in 30 days and
              solving problems using those algorithms. If you complete the
              challenge, you'll earn valuable points that will be stored in your
              user profile, showcasing your progress and achievements.
            </p>
            <p>
              Test Your Knowledge: Take your learning to the next level with our
              Quiz section. After learning a particular topic, you can test your
              knowledge and skills through quizzes and earn points based on your
              performance. It's a fun and interactive way to reinforce your
              learning and track your progress.
            </p>
            <p>
              Contests and Competitions: We also organize contests specifically
              designed for beginner programmers. In our Contest section, you can
              find the schedule of upcoming contests, allowing you to
              participate and challenge yourself against other aspiring
              programmers. It's a great way to apply your skills and gain
              practical experience.
            </p>

            <p>
              Join our Learning Community: At CP+, we believe in the power of
              community. Join our thriving learning community of competitive
              programmers where you can connect with fellow learners, exchange
              ideas, and collaborate on projects. Our platform also provides a
              forum for users to seek help, share insights, and learn from each
              other.
            </p>

            <p>
              Start Your Competitive Programming Journey: Whether you're a
              beginner or an experienced programmer, CP+ has something for
              everyone. With our well-structured learning process, challenging
              exercises, quizzes, contests, and a supportive community, you can
              embark on your competitive programming journey with confidence.
            </p>

            <p>
              Join CP+ today and unlock your full potential in competitive
              programming. Let's code, learn, and grow together!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
