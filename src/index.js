import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./routes/Header";
import Bag from "./routes/Bag";
import Footer from "./components/Footer";
// import Model from "./components/Model";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        {/* <Model /> */}
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: "/bag",
    element: (
      <>
        <Header />
        <Bag />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
