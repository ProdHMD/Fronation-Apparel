import LocomotiveScroll from 'locomotive-scroll';

export const locomotive = async (err) => {
  if (err) {
    console.error(err);
  }

  // Launch smooth scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    reloadOnContextChange: true,
    offset: ['25%',0],
    initPosition: {
      x: 0,
      y: 0,
    },
    mobile: {
      smooth: true,
      breakpoint: 0,
    },
    tablet: {
      smooth: true,
      breakpoint: 0,
    },
  });

  /** Run locomotive scroll script */
  if ($('.main .page-container').innerHeight() < $('.main .page-container > #main-content').innerHeight()) {
    scroll;
  } else {
    scroll;
  }

  // On window resize
  $(window).on('resize', function() {
    scroll.destroy();
    
    if ($('.main .page-container').innerHeight() < $('.main .page-container > #main-content').innerHeight()) {
      scroll.init();
      scroll.start();
    } else {
      scroll.init();
      scroll.start();
    }
  });
};

import.meta.webpackHot?.accept(locomotive);