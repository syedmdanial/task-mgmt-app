import styled from "styled-components";

const Wrapper = styled.nav`
  .Navbar {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .user-profile {
    display: flex;
    align-items: center;
    .user-profile-img {
      img {
        width: 70px;
        height: auto;
        border-radius: 100%;
        object-fit: cover;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        @media (max-width: 767.98px) {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
  .nav-text {
    font-size: 20px;
    color: #6d8187;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (max-width: 250px) {
    .nav-center {
      flex-direction: column;
    }
    .nav-links {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
