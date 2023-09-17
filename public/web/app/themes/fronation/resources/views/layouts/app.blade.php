<?php
  global $post;
  if ($post) {
    if (is_shop()) {
      $post_slug = 'shop';
    } else if (is_product()) {
      $post_slug = 'single-product';
    } else if (is_cart()) {
      $post_slug = 'cart';
    } else if (is_checkout()) {
      $post_slug = 'checkout';
    } else if (is_account_page()) {
      $post_slug = 'my-account';
    } else {
      $post_slug = $post->post_name; 
    }
  } else {
    $post_slug = '';
  }
?>

<a class="sr-only sr-only-focusable visually-hidden" href="#main">
  {{ __('Skip to content') }}
</a>

@include('sections.header')

<main id="<?php if (is_shop()) { echo 'shop'; } else { echo $post_slug; } ?>" <?php body_class('main'); ?>>
  <div class="container-fluid" id="container">
    <div class="row" id="wrapper">
      <div class="col-md-12" id="content">
        <?php if (is_checkout() || is_account_page()) : ?>
          <div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
            <div class="col-md-10 offset-md-1" id="main-content" data-scroll-section>
              <div class="woocommerce-container" id="content" data-scroll>
        <?php elseif (is_cart()) : ?>
          <div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
            <div class="col-md-10 offset-md-1" id="main-content" data-scroll-section>
              <div class="woocommerce-container" id="content" data-scroll>
        <?php endif; ?>
        
        @yield('content')

        <?php if (is_checkout() || is_account_page()) : ?>
              </div>
            </div>
          </div>
        <?php elseif (is_cart()) : ?>
              </div>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</main>

@include('sections.footer')
