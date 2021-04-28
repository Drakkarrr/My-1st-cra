import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNavBar>
      <h1 id="logo">Jry-Dev</h1>
      <ul className="nav-links">
        <li>
          <Link to="/" href="#">
            &#8593; Back to top
          </Link>
        </li>
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 2;
  a {
    text-decoration: none;
    color: white;
  }
  .nav-links {
    list-style: none;
    display: flex;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    letter-spacing: 2.9px;
    color: white;
  }
`;

export default NavBar;
