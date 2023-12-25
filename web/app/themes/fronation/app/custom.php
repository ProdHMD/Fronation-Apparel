<?php

/**
 * Set new image sizes
 * 
 * @return void
 */
add_image_size('gallery-thumb', 500, 350, true);

/**
 * Set up WooCommerce support
 * 
 * @return void
 */
add_theme_support('wc-product-gallery-zoom');
add_theme_support('wc-product-gallery-lightbox');
add_theme_support('wc-product-gallery-slider');
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

/**
 * Set up an options page
 * @since 1.0.0
 * 
 * @return void
 */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(
		array(
			'page_title' => 'Theme Options',
			'menu_title' => 'Theme Options',
			'menu_slug'  => 'theme-options',
			'capability' => 'edit_posts',
			'redirect'	 => false
		)
	);
}
