<?php
/**
 * Plugin Name: Gutenberg Customizations
 * Description: Customizations for the Gutenberg editor.
 * Version: 1.0
 * Author: Automattic
 * 
 */

// strict types.
declare( strict_types = 1 );

// can't access this file directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// constants for plugin.
define( 'GUTENBERG_CUSTOMIZATIONS_VERSION', '1.0' );
define( 'GUTENBERG_CUSTOMIZATIONS_URL', plugin_dir_url( __FILE__ ) );
define( 'GUTENBERG_CUSTOMIZATIONS_PATH', plugin_dir_path( __FILE__ ) );

// require hooks and functions.
require_once GUTENBERG_CUSTOMIZATIONS_PATH . 'inc/gutenberg-customizations-functions.php';
require_once GUTENBERG_CUSTOMIZATIONS_PATH . 'inc/gutenberg-customizations-hooks.php';


