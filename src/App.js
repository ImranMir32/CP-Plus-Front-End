import React from "react";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error.page.jsx";
import CpGuide from "./routes/CP-Guide";
import SigninForm from "./routes/SigninForm";
import SignupForm from "./routes/SignupForm";
import TermsPrivacy from "./routes/Terms-Privacy";
import ContactUs from "./routes/ContactUs";
import Challenges from "./routes/Challenges";
import Contest from "./routes/Contest";
import Quiz from "./routes/Quiz";
import AboutUs from "./routes/AboutUs";
import UserProfile from "./routes/UserProfile";
import ResetPassword from "./components/UserProfile-Components/ResetPassword";
import UpdateProfile from "./components/UserProfile-Components/UpdateProfile";

import { GlobalStateProvider } from "./Context/Global_Context";
import { GlobalMethodsProvider } from "./Context/GlobalMethodsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SigninForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cpguide",
    element: <CpGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contest",
    element: <Contest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/challenge",
    element: <Challenges />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/term&privacy",
    element: <TermsPrivacy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/update-profile",
    element: <UpdateProfile />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <GlobalStateProvider>
      <GlobalMethodsProvider>
        <RouterProvider router={router} />
      </GlobalMethodsProvider>
    </GlobalStateProvider>
  );
}

export default App;
