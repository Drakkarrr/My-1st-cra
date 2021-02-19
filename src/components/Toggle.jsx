import { motion } from "framer-motion";
import { useState } from "react";
import { LineAnimations } from "../animations";
import { useScroll } from "./useScroll";

const Toggle = ({ children, question }) => {
  const [toggle, setToggle] = useState(false);
  const [element, controls] = useScroll();
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout> {question} </motion.h4>
      {toggle ? children : ""}
      <motion.div
        animate={controls}
        initial="after"
        ref={element}
        variants={LineAnimations}
        className="faq-line"
      ></motion.div>
    </motion.div>
  );
};
export default Toggle;
