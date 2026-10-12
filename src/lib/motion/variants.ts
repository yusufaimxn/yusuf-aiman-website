export const motionEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition = {
  duration: 0.72,
  ease: motionEase,
};

export const fastTransition = {
  duration: 0.28,
  ease: motionEase,
};

export const staggerTransition = {
  duration: 0.5,
  ease: motionEase,
};
