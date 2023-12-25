<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
    <div class="col-md-8 offset-md-2" id="main-content" data-scroll-section>
        <div class="row" id="content" data-scroll>
            <div class="col-md-12" id="text">
                <h1>{!! $title !!}</h1>
                <div class="content-container">@php(the_content())</div>
            </div>
        </div>
    </div>
</div>
