import profile2 from "../img/Profile2.jpg";
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import { ScrollAnimations } from "../animations";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={ScrollAnimations}
      animate={controls}
      initial="before"
      ref={element}
    >
      <StyledDescription>
        <h2>
          Stacks &amp; <span>Skills</span>
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <h3>HTML5</h3>
            </div>
            <p>
              <li>Semantic tags</li>
              <li>Non Semantic</li>
              <li>Jsx</li>
              <li>Xml</li>
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <h3>(S)CSS3</h3>
            </div>
            <p>
              <li>Flex & Grid</li>
              <li>Keyframes</li>
              <li>Media Queries</li>
              <li>Sass</li>
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <h3>JavaScript(ES6)</h3>
            </div>
            <p>
              <li>Vanilla/Plain js</li>
              <li>ES6</li>
              <li>Jsx syntax</li>
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <h3>Git/Github</h3>
            </div>
            <p>
              <li>Version Control System</li>
              <li>Git Commands</li>
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <h3>Bootstrap 4</h3>
            </div>
            <p>
              <li>Jquery</li>
              <li>Ajax</li>
              <li>Packages</li>
              <li>Installations</li>
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <h3>React.Js(x)</h3>
            </div>
            <p>
              <li>CRA (Hooks)</li>
              <li>Styled Components</li>
              <li>Redux</li>
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImg>
        <img className="prof2" src={profile2} alt="" />
      </StyledImg>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
    font-family: "Playfair Display", serif;
  }
  p {
    width: 70%;
    padding: 1.5rem 0rem 4rem 0rem;
  }
`;

const StyledImg = styled(StyledImage)`
  border-radius: 500px;
  margin-top: 12rem;
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  h3 {
    margin: 2rem;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    h3 {
      margin-left: 1rem;
      background-color: #282828;
      color: white;
      padding: 1rem;
      border-radius: 50px;
    }
  }
`;

export default ServicesSection;
