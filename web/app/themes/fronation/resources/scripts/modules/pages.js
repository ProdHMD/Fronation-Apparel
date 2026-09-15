export const pages = async (err) => {
  if (err) {
    console.error(err);
  }

  /**
   * Set the main content height so it fills the available
   * space between the header and footer.
   */
  function setHeight() {
    const appHeight = $('#app').innerHeight();
    const headerHeight = $('#header').outerHeight();
    const footerHeight = $('#footer').outerHeight();

    // The app already accounts for the WordPress admin bar,
    // so only subtract the header and footer here.
    const adjustedHeight = Math.floor(
      appHeight - headerHeight - footerHeight
    );

    $('main').css({
      height: adjustedHeight,
      'max-height': adjustedHeight,
    });
  }

  // Set the initial content height.
  setHeight();

  // Recalculate whenever the viewport changes.
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
