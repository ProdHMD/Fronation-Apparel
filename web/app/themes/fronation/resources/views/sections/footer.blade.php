<?php
  $facebook = get_field('facebook', 'option');
  $twitter = get_field('twitter', 'option');
  $instagram = get_field('instagram', 'option');
  $youtube = get_field('youtube', 'option');
?>

<footer class="content-info" id="footer">
  @if (has_nav_menu('footer_navigation'))
    <nav class="nav-footer" aria-label="{{ wp_get_nav_menu_name('footer_navigation') }}" id="footer-navigation">
      {!! wp_nav_menu(['theme_location' => 'footer_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}

      <div class="socials">
        <ul class="social-list list-unstyled">
          <?php if ($facebook) : ?><li class="social facebook"><a href="<?php echo $facebook; ?>" target="_blank"><x-fab-facebook /></a></li><?php endif; ?>
          <?php if ($twitter) : ?><li class="social twitter"><a href="<?php echo $twitter; ?>" target="_blank"><x-fab-twitter /></a></li><?php endif; ?>
          <?php if ($instagram) : ?><li class="social instagram"><a href="<?php echo $instagram; ?>" target="_blank"><x-fab-instagram /></a></li><?php endif; ?>
          <?php if ($youtube) : ?><li class="social youtube "><a href="<?php echo $youtube; ?>" target="_blank"><x-fab-youtube /></a></li><?php endif; ?>
        </ul>
      </div>
    </nav>
  @endif

  <div class="credits">
    <span class="text">Site by <a href="https://lljb3.com/" target="_blank">ProdHMD</a>
  </div>
</footer>
