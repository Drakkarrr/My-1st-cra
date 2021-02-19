import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.3 });
  const controls = useAnimation();
  if (view) {
    controls.start("before");
  } else {
    controls.start("after");
  }
  return [element, controls];
};
