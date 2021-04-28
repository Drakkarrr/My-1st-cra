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
          I help individuals to expand the scope and grow their business
          networks to provide more sales to their business through delivering a
          high quality websites with clean ui &amp; elegant feels.
          <br />
          <br />
          I'm an aspiring web developer &amp; software engineer passionate in
          creating websites that consist of lovely animations and 3D designs.
          <br />
          <br />I used modern &amp; powerful tools such as react, redux,
          styled-components, node &amp; express.js.
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
