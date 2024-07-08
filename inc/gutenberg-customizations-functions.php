<?php
/**
 * Functions
 *
 * @package     Gutenberg_Customizations\Functions
 * @since       1.0.0
 */

namespace Gutenberg_Customizations\Functions;

/**
 * Get the current date
 *
 * @return string
 */
function get_current_date(): string {
	return date( 'Y-m-d' );}

/**
 * Get the current time
 *
 * @return string
 */
function get_current_time():string {
	return gmdate( 'H:i:s' );}
