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
    const $forms = $('form');
  
    if (!$forms.length) return;
  
    const updateLabel = function (element) {
      const $el = $(element);
      let $label = $el.closest('.woocommerce-input-wrapper').prev('label:not(.checkbox)');
  
      if (!$label.length) {
        // Fallback for edit-account structure
        $label = $el.prev('label:not(.checkbox)');
      }
  
      const hasValue = $el.val() && $el.val().trim().length > 0;
      const isPlaceholderOnly = $el.attr('placeholder') === $el.val();
  
      if (hasValue && !isPlaceholderOnly) {
        $label.addClass('focused');
      } else {
        $label.removeClass('focused');
      }
    };
  
    // Initial state update
    $forms.find('input, textarea, select').each(function () {
      updateLabel(this);
    });
  
    // Dynamic update on interaction
    $forms.on('input blur focus change', 'input, textarea, select', function () {
      updateLabel(this);
    });
  
    // Click label to focus the correct field
    $forms.on('click', 'label:not(.focused, .checkbox)', function () {
      const $label = $(this);
      let $field = $label.next('.woocommerce-input-wrapper').find('input, textarea, select');
  
      if (!$field.length) {
        // Fallback for edit-account layout
        $field = $label.next('input, textarea, select');
      }
  
      $label.addClass('focused');
      $field.trigger('focus');
    });
  }

  // Run on load
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
