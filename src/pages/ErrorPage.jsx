import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for</p>
        <button className="btn main-btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
