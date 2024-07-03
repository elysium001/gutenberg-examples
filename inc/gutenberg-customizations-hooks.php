<?php

// define const for pre-publish-checklist path if one does not exist.
if ( ! defined( 'GUTENBERG_PRE_PUB_CHECKLIST_BUILD_PATH' ) ) {
    define( 'GUTENBERG_PRE_PUB_CHECKLIST_BUILD_PATH', 'build/pre-publish-checklist/' );
}

function minimal_register_block() {
	register_block_type( GUTENBERG_CUSTOMIZATIONS_PATH . 'build/test-block/'  );
	register_block_type( GUTENBERG_CUSTOMIZATIONS_PATH . GUTENBERG_PRE_PUB_CHECKLIST_BUILD_PATH  );
}
add_action( 'admin_init', 'minimal_register_block' );