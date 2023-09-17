<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
    <div class="col-md-10 offset-md-1" id="main-content" data-scroll-section>
        <div class="row" id="content" data-scroll>
            <div class="col-md-5" id="image">
                <?php echo get_the_post_thumbnail($post->ID, 'full', array('class'=>"img-fluid attachment-post-thumbnail center-block")); ?>
            </div>
            <div class="col-md-7" id="text">
                <h1>{!! $title !!}</h1>
                <div class="content-container">@php(the_content())</div>
            </div>
        </div>
    </div>
</div>
