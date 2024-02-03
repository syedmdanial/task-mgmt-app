import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/not-found.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="ErrorPage">
      <img src={img} alt="not found" />
      <h3>Ohh!</h3>
      <p>We can't seem to find page you are looking for</p>
      <button className="btn btn-solid" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
