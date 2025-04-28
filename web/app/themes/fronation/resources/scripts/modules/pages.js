import { scroll } from './locomotive.js';

export const pages = async (err) => {
  if (err) {
    console.error(err);
  }

  function setHeight() {
    const viewHeight = $(window).height();
    const headerHeight = $('#header').innerHeight();
    const footerHeight = $('#footer').innerHeight();
    const adminBarHeight = $('#wpadminbar').innerHeight();
    const isLoggedIn = $('body').hasClass('logged-in');

    const offset = headerHeight + footerHeight + (isLoggedIn ? adminBarHeight : 0);
    const adjustedHeight = viewHeight - offset;

    // Set max-height for <main> element and adjust the last child padding
    $('main').css({
      'max-height': adjustedHeight,
    });

    // Add padding to the last child in the scrollable section
    $('main .page-container > *:last-child').css({
      'padding-bottom': offset,
    });

    // Update Locomotive Scroll layout after height change
    updateLocomotive();
  }

  // Update Locomotive Scroll after the height changes
  function updateLocomotive() {
    if (scroll && typeof scroll.update === 'function') {
      setTimeout(() => {
        scroll.update(); // Force scroll update
      }, 100);
    }
  }

  // Run on load
  setHeight();

  // Re-run on resize
  $(window).on('resize', function () {
    setHeight();
  });

  // WooCommerce input focus/blur logic
  function formInputs() {
    if ($('form').length) {
      const updateLabel = function (input) {
        const label = $(input).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)');
        $(input).val() ? label.addClass('focused') : label.removeClass('focused');
      };

      $('form input').each(function () {
        updateLabel(this);
      });

      $('form').on('blur change', 'input', function () {
        updateLabel(this);
      }).on('focus change', 'input', function () {
        updateLabel(this);
      });

      $('form').on('click', 'label:not(.focused,.checkbox)', function () {
        $(this).addClass('focused');
        $(this).next().children('input').focus();
      });
    }
  }

  formInputs();

  // WooCommerce checkout fix on autocomplete blur/input
  if ($('.main').hasClass('checkout')) {
    $('form.checkout').on('blur input', function () {
      $('.main').css('position', 'static');
      setTimeout(() => {
        $('.main > #container').css('position', 'relative');
      }, 0); // Changed from -500 to 0, negative delay is invalid
    });
  }
};

import.meta.webpackHot?.accept(pages);
