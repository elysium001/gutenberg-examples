<?php

declare(strict_types=1);

namespace Gutenberg_Customizations\Hooks;

/**
 * Register custom blocks.
 */
\add_action('init', __NAMESPACE__ . '\minimal_register_block');
function minimal_register_block()
{
	\register_block_type(GUTENBERG_CUSTOMIZATIONS_PATH . 'build/test-block/');
	\register_block_type(GUTENBERG_CUSTOMIZATIONS_PATH . 'build/user-permission-based-block/');
	\register_block_type(GUTENBERG_CUSTOMIZATIONS_PATH . 'build/pre-publish-checklist/');
}

/**
 * Add user roles and capabilities to the REST API response for the user endpoint.
 * For use with the user-permission-based-block.
 */
\add_filter('rest_prepare_user', __NAMESPACE__ . '\add_user_roles_to_rest_response', 10, 3);
function add_user_roles_to_rest_response($response, $user, $request)
{
	// Check if the request is authenticated
	if (\is_user_logged_in() && !empty($response->data)) {
		// Only add roles and capabilities for the logged-in user
		if (\get_current_user_id() === $user->ID) {
			$response->data['roles'] = $user->roles;
			$response->data['capabilities'] = $user->allcaps;
		}
	}
	return $response;
}
