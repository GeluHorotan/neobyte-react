export const slidingRight = {
  hidden: {
    x: '-100%',
  },
  show: {
    x: '-1%',

    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};
export const fadeUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};

export const fadeLeft = {
  hidden: {
    x: '10%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,

    transition: { ease: 'easeInOut', duration: 1 },
  },
};

export const zooming = {
  hidden: {
    scale: 1,
  },
  show: {
    scale: 1.3,
    transition: {
      delay: 1.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2,
    },
  },
};
