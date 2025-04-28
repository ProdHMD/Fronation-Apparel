import LocomotiveScroll from 'locomotive-scroll';

let scrollInstance;

export const scroll = (() => {
  let initialized = false;

  const initScroll = () => {
    const scrollTarget = document.querySelector('[data-scroll-section]');
    if (!scrollTarget || initialized) return;

    // Initialize Locomotive Scroll
    scrollInstance = new LocomotiveScroll({
      el: scrollTarget,
      smooth: true,
      reloadOnContextChange: true,
      offset: [0, 0],
      initPosition: { x: 0, y: 0 }, // Ensure scroll starts at top
      mobile: {
        smooth: true,
        breakpoint: 0,
      },
      tablet: {
        smooth: true,
        breakpoint: 0,
      },
    });

    // Set initialization flag
    initialized = true;

    // Reset transform on resize to prevent offset issues
    window.addEventListener('resize', () => {
      setTimeout(() => {
        if (scrollInstance) {
          scrollInstance.scrollTo(0, 0); // Reset scroll to top on resize
          scrollInstance.update(); // Ensure scroll update
        }
      }, 100); // Wait for layout to settle
    });
  };

  const updateScroll = () => {
    if (scrollInstance && typeof scrollInstance.update === 'function') {
      scrollInstance.update();
    }
  };

  const destroyScroll = () => {
    if (scrollInstance && typeof scrollInstance.destroy === 'function') {
      scrollInstance.destroy();
      initialized = false;
    }
  };

  // Resize debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      destroyScroll();
      initScroll();
      updateScroll();
    }, 300);
  });

  // Start the scroll on load
  window.addEventListener('load', () => {
    initScroll();
    setTimeout(updateScroll, 100);
  });

  return {
    update: updateScroll,
    destroy: destroyScroll,
    init: initScroll,
    instance: () => scrollInstance,
  };
})();

import.meta.webpackHot?.accept(scroll);
