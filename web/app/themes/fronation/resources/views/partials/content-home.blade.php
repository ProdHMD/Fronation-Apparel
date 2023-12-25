<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
    <div class="col-md-6 offset-md-3" id="main-content" data-scroll-section>
        <div id="content" data-scroll>
            <div class="text-center" id="image-container">
                <img src="@asset('images/fronation-home-image.png')" class="home-image img-fluid">
            </div>
        </div>
    </div>
</div>
