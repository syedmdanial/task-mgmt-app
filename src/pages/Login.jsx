import axios from "axios";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginSuccess } from "../store/actions/authAction";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Login = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "" && id.trim() !== "") {
      //   let data = { username, id };

      //   axios
      //     .post("http://localhost:3000/login", data)
      //     .then((res) => {
      //       console.log(res);
      //       data.id = res.data.id;
      //       props.setLoginSuccess(data);
      //       navigate("/");
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       if (err.response.status === 500) {
      //         toast.error("Username or password not found");
      //       } else {
      //         toast.error("Login failed");
      //       }
      //     });
      props.setLoginSuccess({});
      navigate("/");
    } else {
      toast.error("ID or Name cannot be empty");
    }
  };

  return (
    <div className="Login">
      <Form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h5 className="mb-3">Login</h5>
        <div className="form-row">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your ID"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        </div>
        <div className="form-row">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Login
        </button>
      </Form>
      {/* <div className="d-flex justify-content-center align-items-center">
        <span>Don't have an account yet? Click here to create an account</span>
        <NavLink to="/register" className="btn ml-2">
          Register
        </NavLink>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {} = state;
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  setLoginSuccess: (data) => dispatch(setLoginSuccess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
