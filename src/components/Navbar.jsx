import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { onLogout } from "../store/actions/authAction";
import userImage from "../assets/cyclist.jpg";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="nav-center">
        <NavLink to="/" className="nav-link">
          <div className="user-profile">
            <div className="user-profile-img ">
              <img src={userImage} alt="Avatar" />
            </div>
            <div className="user-name ">
              <span>{props.user.name}</span>
            </div>
          </div>
        </NavLink>
        <div className="nav-links">
          <span
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={() => props.onLogout()}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user } = state.auth;
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(onLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
