import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
/* components */
// import Navbar from "../components/Navbar";

const PrivateRoutes = ({
  component: component,
  auth: { isLoggedIn },
  ...rest
}) => {
  const _isLoggedIn = true;
  return _isLoggedIn ? (
    <>
      {/* <Navbar /> */}
      <section className="page">
        <Outlet />
      </section>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoutes);
