export const pages = async (err) => {
  if (err) {
    console.error(err);
  }

  // Set height for main subtracting height from header
  function setHeight() {
    // Variables
    var view_height = $(window).height();
    var header_height = $('#header').innerHeight();
    var footer_height = $('#footer').innerHeight();
    var admin_bar = $('#wpadminbar').innerHeight();

    if ($('body').hasClass('logged-in')) {
      $('main').css({
        'height': (view_height - header_height - footer_height - admin_bar),
      });
      $('main .page-container').css({
        'min-height': (view_height - header_height - footer_height - admin_bar),
      });
    } else {
      $('main').css({
        'height': (view_height - header_height - footer_height),
      });
      $('main .page-container').css({
        'min-height': (view_height - header_height - footer_height),
      });
    }
  }
  setHeight();

  // Reset height function on window resize
  $(window).on('resize', function() {
    setHeight();
  });

  // Add focused class to all inputs on focus and blur
  function formInputs() {
    if ($('form').length) {
      $('form input').each(function() {
        if ($(this).val() != '') {
          $(this).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)').addClass('focused');
        } else {
          $(this).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)').removeClass('focused');
        }
      });

      $('form').on('blur change', 'input', function() {
        if (!$(this).val()) {
          $(this).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)').removeClass('focused');
        } else {
          $(this).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)').addClass('focused');
        }
      }).on('focus change', 'input', function() {
        if (!$(this).val()) {
          $(this).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)').addClass('focused');
        }
      }).on('focus change', 'input', function() {
        if ($(this)) {
          $(this).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)').addClass('focused');
        } else {
          $(this).parent('.woocommerce-input-wrapper').prev('label:not(.checkbox)').removeClass('focused');
        }
      });

      $('form').on('click', 'label:not(.focused,.checkbox)', function() {
        $(this).addClass('focused');
        $(this).next().children('input').on('focus change');
      });
    }
  }
  formInputs();

  // Fix form on autocomplete
  if ($('.main').hasClass('checkout')) {
    $('form.checkout').on('blur input', function() {
      $('.main').css('position','static');
      setTimeout(function() {
        $('.main').children('#container').css('position','relative');
      }, -500);
    });
  }
};

import.meta.webpackHot?.accept(pages);