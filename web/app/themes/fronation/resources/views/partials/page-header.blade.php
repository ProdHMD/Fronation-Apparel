<?php 
  $args = array(
    'post_type' => 'product',
    'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  $product_count = WC()->cart->get_cart_contents_count();
?>

<?php if (is_cart()) : ?>
  <div class="page-header">
    <h1 class="shop-title">Cart <span class="product-count"><?php if (!empty($product_count)) { echo '(' . $product_count . ')'; } else { echo '(0)'; } ?></span></h1>
  </div>
<?php endif; ?>

<?php if (is_checkout()) : ?>
  <div class="page-header">
    <h1 class="shop-title">Checkout</h1>
  </div>
<?php endif; ?>
