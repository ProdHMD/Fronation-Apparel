import LocomotiveScroll from 'locomotive-scroll';

let scrollInstance;

export const scroll = (() => {
  let initialized = false;
  let resizeTimeout;

  const initScroll = () => {
    const wrapper = document.querySelector('.page-container');
    const content = wrapper?.querySelector(':scope > #main-content');

    if (!wrapper || !content || initialized) return;

    wrapper.scrollTop = 0;

    scrollInstance = new LocomotiveScroll({
      lenisOptions: {
        wrapper,
        content,
        eventsTarget: wrapper,
        lerp: 0.05,
        smoothWheel: true,
        syncTouch: true,
      },
    });

    // Set initialization flag
    initialized = true;

    scrollInstance.lenisInstance?.scrollTo(0, {
      immediate: true,
      force: true,
    });
  };

  const updateScroll = () => {
    if (!scrollInstance) return;

    scrollInstance.resize?.();
    scrollInstance.lenisInstance?.resize?.();
  };

  const destroyScroll = () => {
    if (!scrollInstance) return;

    scrollInstance.destroy();

    scrollInstance = null;
    initialized = false;
  };

  const handleResize = () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      updateScroll();
    }, 300);
  };

  window.addEventListener('resize', handleResize);

  // Start the scroll on load
  window.addEventListener('load', () => {
    initScroll();

    requestAnimationFrame(() => {
      updateScroll();
    });
  });

  return {
    update: updateScroll,
    destroy: destroyScroll,
    init: initScroll,
    instance: () => scrollInstance,
  };
})();

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();

  import.meta.webpackHot.dispose(() => {
    scroll.destroy();
  });
}
