import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
/* components */
import Navbar from "../components/Navbar";

const PrivateRoutes = ({ auth: { isLoggedIn } }) => {
  return isLoggedIn ? (
    <>
      <Navbar />
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
