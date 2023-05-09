import React from "react";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error.page.jsx";
import CpGuide from "./routes/CP-Guide";
import SigninForm from "./routes/SigninForm";
import SignupForm from "./routes/SignupForm";
import TermsPrivacy from "./routes/Terms-Privacy";

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
    path: "/cpguide",
    element: <CpGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/term&privacy",
    element: <TermsPrivacy />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
