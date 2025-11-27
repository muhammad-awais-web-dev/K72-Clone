import gsap from 'gsap';

/**
 * Animates stairs in (covering the screen)
 * @param {HTMLElement} stairsParentRef - Reference to the stairs parent element
 * @param {Function} onComplete - Optional callback function to execute when animation completes
 * @returns {gsap.core.Timeline} The GSAP timeline
 */
export const stairsIn = (stairsParentRef, onComplete) => {
  const steps = gsap.utils.toArray(stairsParentRef.querySelectorAll('.step'));
  const tl = gsap.timeline({
    onComplete: onComplete
  });

  tl.set(stairsParentRef, {
    display: 'flex',
  })
  .from(steps, {
    height: 0,
    duration: 0.4,
    stagger: {
      amount: -0.2,
      from: "start"
    },
    ease: "power2.inOut"
  });

  return tl;
};

/**
 * Animates stairs out (revealing the content)
 * @param {HTMLElement} stairsParentRef - Reference to the stairs parent element
 * @param {Function} onComplete - Optional callback function to execute when animation completes
 * @returns {gsap.core.Timeline} The GSAP timeline
 */
export const stairsOut = (stairsParentRef, onComplete) => {
  const steps = gsap.utils.toArray(stairsParentRef.querySelectorAll('.step'));
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(stairsParentRef, { display: 'none' });
      gsap.set(steps, { height: "100%", y: 0 });
      if (onComplete) onComplete();
    }
  });

  tl.to(steps, {
    y: "100%",
    duration: 0.4,
    stagger: {
      amount: -0.2,
      from: "start"
    },
    ease: "power2.inOut"
  });

  return tl;
};

/**
 * Complete stairs animation (in then out) with a callback in between
 * @param {HTMLElement} stairsParentRef - Reference to the stairs parent element
 * @param {Function} onMiddle - Callback function to execute when stairs are fully covering
 * @returns {gsap.core.Timeline} The GSAP timeline
 */
export const stairsInOut = (stairsParentRef, onMiddle) => {
  const steps = gsap.utils.toArray(stairsParentRef.querySelectorAll('.step'));
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(stairsParentRef, { display: 'none' });
      gsap.set(steps, { height: "100%", y: 0 });
    }
  });

  tl.set(stairsParentRef, {
    display: 'flex',
  })
  .from(steps, {
    height: 0,
    duration: 0.4,
    stagger: {
      amount: -0.2,
      from: "start"
    },
    ease: "power2.inOut"
  })
  .call(() => {
    if (onMiddle) onMiddle();
  })
  .to(steps, {
    y: "100%",
    duration: 0.4,
    stagger: {
      amount: -0.2,
      from: "start"
    },
    ease: "power2.inOut"
  });

  return tl;
};
