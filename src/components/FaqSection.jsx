import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { ScrollAnimations } from "../animations";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={ScrollAnimations}
      animate={controls}
      initial="before"
      ref={element}
    >
      <h1>About Me</h1>
      <AnimateSharedLayout>
        <Toggle question="Who am I?">
          <div className="answer">
            <p>
              I am Junrey Lañas, A second year college &amp; 21 years of age, I
              am an aspiring software engineer/web developer with years of
              experience in programming, I've studied computer system servicing
              in SHS and currently studying Information technology knowledgable
              in hardware and software configuration &amp; troubleshooting,
              networking, programming, coding and software development.
            </p>
          </div>
        </Toggle>

        <Toggle question="What are my other skills?">
          <div className="answer">
            <p>
              I am also knowledgable &amp; experienced in the following tools
              such as Figma, Affinity photo &amp; designer, UX Pin, MS
              technologies such as Word, Excel &amp; Powerpoint, And some of my
              soft skills are Communication, Teamwork &amp; collaboration,
              Creative problem solving and innovation, Time management, Critical
              thinking, A growth mindset, Adaptability, Decision-making,
              Emotional intelligence, Organizational, Stress management and a
              Good/active listener.
            </p>
          </div>
        </Toggle>

        <Toggle question="What's my hobbies and interest?">
          <div className="answer">
            <p>
              My hobbies are coding, playing computer games, listening music and
              reading article, documentations exploring new tech trends.
            </p>
          </div>
        </Toggle>

        <Toggle question="What is my goals in life?">
          <div className="answer">
            <p>
              My goals in life is just simple, to be a fullstack developer in a
              big i.t company and giveback to my parents someday.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }

  h1 {
    padding-bottom: 2rem;
    font-size: 4rem;
  }

  h4 {
    font-weight: lighter;
    font-size: 2rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
