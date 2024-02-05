import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/authAction";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Loading from "../components/shared/Loading";

const Login = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (name.trim() !== "" && id.trim() !== "") {
      try {
        let data = { name, id };

        await props.loginUser(data);
        setLoading(false);
        toast.success("Logged in successfully");
        navigate("/");
      } catch (err) {
        // console.log(err);
        toast.error("Invalid ID or Name");
        setLoading(false);
      }
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
            Name
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <button type="submit" className="btn btn-block" disabled={loading}>
          {!loading ? "Login" : <Loading />}
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
  loginUser: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
