import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/authAction";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="nav-center">
        <NavLink to="/" className="logo nav-link">
          <h3>Task Management App</h3>
        </NavLink>
        <div className="nav-links">
          <span
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => props.logoutUser()}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {} = state;
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
