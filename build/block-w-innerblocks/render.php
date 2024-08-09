<?php

// see: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#render

// sanitize content.
$content = wp_kses_post( $content );
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php echo  $content; ?>
</div>