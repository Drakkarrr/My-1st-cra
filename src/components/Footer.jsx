import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaMobile } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { ScrollAnimations } from "../animations";
import { useScroll } from "./useScroll";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFooter
      id="Contact"
      variants={ScrollAnimations}
      animate={controls}
      initial="before"
      ref={element}
    >
      <div className="title">
        <h1>Contact Me</h1>
      </div>
      <StyledContact>
        <a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
          <p>
            <HiMail className="icon" /> : Junrey17_Lanas@gmail.com
          </p>
        </a>

        <p className="number">
          <FaMobile className="icon" /> : +639 300 216 517
        </p>

        <a href="https://github.com/codeDrakkar?fbclid=IwAR26cO_mg1M9tTtjwHQLhnYjZdl3gAWbiji79njgk9CfvU_yIg8bGY1sxsw">
          <p>
            <FaGithub className="icon" /> : CodeDrakkar
          </p>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100010980994040">
          <p>
            <FaFacebook className="icon" /> : Drakkar
          </p>
        </a>
      </StyledContact>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.div)`
  display: block;
  height: 70vh;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  margin: 10rem;
  color: white;
  font-family: "Playfair Display", serif;
  border: solid white;
  border-radius: 20px;
  background-color: #282828;
  h1 {
    font-size: 4rem;
    padding-bottom: 2rem;
  }
`;

const StyledContact = styled.div`
  height: 50vh;
  a {
    padding: 1.5rem 0;
    width: 2rem;
    text-decoration: none;
    p {
      font-size: 2rem;
      padding: 2rem 0;
      color: white;
      display: flex;
      padding-right: 1rem;
      .icon {
        height: 50px;
        width: 50px;
        padding-right: 1rem;
      }
    }
  }

  .number {
    font-size: 2rem;
    padding: 2rem 0;
    color: white;
    display: flex;
    padding-right: 1rem;
    .icon {
      padding-right: 1rem;
      width: 50px;
      height: 45px;
    }
  }
`;

export default Footer;
