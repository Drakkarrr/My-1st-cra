//! Page Animations
export const PageAnimations = {
  before: {
    opacity: 0,
    y: 310,
    transition: {
      duration: 0.3,
    },
  },

  after: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
    y: 310,
    transition: {
      duration: 0.3,
    },
  },
};

//! About Us  Text Animation
export const AboutTextAnimations = {
  before: {
    y: 200,
  },

  after: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

//! About Us Subtext Animation
export const SubtextAnimations = {
  before: {
    opacity: 0,
  },

  after: {
    opacity: 1.5,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

//! About Us Photo Animation
export const ImageAnimations = {
  before: {
    opacity: 0,
    scale: 0.55,
  },

  after: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

//! Scroll Animation
export const ScrollAnimations = {
  before: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },

  after: {
    opacity: 0,
    scale: 0.15,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const TestAnimations = {
  before: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },

  after: {
    opacity: 0,
    scale: 0.15,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

//! Line Animation
export const LineAnimations = {
  before: {
    width: "100%",
    transition: { duration: 1 },
  },

  after: {
    width: "0%",
  },
};
