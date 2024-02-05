import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { onLogout } from "../store/actions/authAction";
import Wrapper from "../assets/wrappers/Navbar";
import userImage from "../assets/cyclist.jpg";

const Navbar = (props) => {
  return (
    <Wrapper>
      <div className="Navbar">
        <div className="nav-center">
          <NavLink to="/" className="nav-link">
            <div className="user-profile">
              <div className="user-profile-img ">
                <img src={userImage} alt="Avatar" />
              </div>
              <div className="nav-text">
                <span>{props.user.name}</span>
              </div>
            </div>
          </NavLink>
          <span
            className="nav-text"
            style={{ cursor: "pointer" }}
            onClick={() => props.onLogout()}
          >
            Logout
          </span>
        </div>
      </div>
    </Wrapper>
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
