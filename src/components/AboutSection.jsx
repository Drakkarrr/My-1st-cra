import Profile from "../img/Profile.jpg";
import { motion } from "framer-motion";
import Topper from "./Topper";
import {
  AboutTextAnimations,
  SubtextAnimations,
  ImageAnimations,
} from "../animations";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={AboutTextAnimations}>Hello World!</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={AboutTextAnimations}>
              I am <span> Junrey Lañas</span>
            </motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={SubtextAnimations}>
          I am an aspiring web designer &amp; developer and a tech savy one, I
          design and develop wireframes for websites and web apps with clean and
          elegant ui/ux, Mobile friendly and fully responsive design, Stunning
          animations &amp; transitions and fully functional one using advance
          tools such as figma/uxpin, react.js, redux, react-router, framer
          motion, styled components and many more in my development. <br />{" "}
          <br />
          <span style={{ color: "white" }}>Tags:</span> Front end developer,
          React-redux developer, React.js developer, Web designer, Web
          developer, programmer, coder, developer, ui/ux designer, Potato
          developer, Mema developer
        </motion.p>
        <motion.button variants={SubtextAnimations}>
          <a href="#Contact">Contact Me!</a>
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          className="prof1"
          variants={ImageAnimations}
          src={Profile}
          alt="Me, My Self, And I"
        />
      </StyledImage>
      <Topper />
    </StyledAbout>
  );
};

export default AboutSection;
