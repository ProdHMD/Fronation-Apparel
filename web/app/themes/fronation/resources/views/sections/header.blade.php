<header class="banner" id="header">
  @if (has_nav_menu('primary_navigation'))
    <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}" id="main-navigation">
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
    </nav>
  @endif

  <nav class="nav-branding" aria-label="Fronation Apparel" id="branding">
    <a class="brand" href="{{ home_url('/') }}">
      <div class="logo"></div>
    </a>
  </nav>

  <nav class="nav-shop" aria-label="Cart" id="shop-navigation">
    <a class="cart-button" href="/cart/">
      <span class="cart-count"><?php echo WC()->cart->get_cart_contents_count() ?></span>
      <i class="fas fa-bag-shopping"></i>
    </a>
  </nav>
</header>
