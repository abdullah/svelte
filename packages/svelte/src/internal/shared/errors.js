/* This file is generated by scripts/process-messages/index.js. Do not edit! */

import { DEV } from 'esm-env';

/**
 * `%name%(...)` can only be used during component initialisation
 * @param {string} name
 * @returns {never}
 */
export function lifecycle_outside_component(name) {
	if (DEV) {
		const error = new Error(`lifecycle_outside_component\n\`${name}(...)\` can only be used during component initialisation`);

		error.name = 'Svelte error';
		throw error;
	} else {
		// TODO print a link to the documentation
		throw new Error("lifecycle_outside_component");
	}
}

/**
 * The argument to `{@render ...}` must be a snippet function, not a component or a slot with a `let:` directive or some other kind of function. If you want to dynamically render one snippet or another, use `$derived` and pass its result to `{@render ...}`
 * @returns {never}
 */
export function render_tag_invalid_argument() {
	if (DEV) {
		const error = new Error(`render_tag_invalid_argument\nThe argument to \`{@render ...}\` must be a snippet function, not a component or a slot with a \`let:\` directive or some other kind of function. If you want to dynamically render one snippet or another, use \`$derived\` and pass its result to \`{@render ...}\``);

		error.name = 'Svelte error';
		throw error;
	} else {
		// TODO print a link to the documentation
		throw new Error("render_tag_invalid_argument");
	}
}

/**
 * `%name%` is not a store with a `subscribe` method
 * @param {string} name
 * @returns {never}
 */
export function store_invalid_shape(name) {
	if (DEV) {
		const error = new Error(`store_invalid_shape\n\`${name}\` is not a store with a \`subscribe\` method`);

		error.name = 'Svelte error';
		throw error;
	} else {
		// TODO print a link to the documentation
		throw new Error("store_invalid_shape");
	}
}

/**
 * The `this` prop on `<svelte:element>` must be a string, if defined
 * @returns {never}
 */
export function svelte_element_invalid_this_value() {
	if (DEV) {
		const error = new Error(`svelte_element_invalid_this_value\nThe \`this\` prop on \`<svelte:element>\` must be a string, if defined`);

		error.name = 'Svelte error';
		throw error;
	} else {
		// TODO print a link to the documentation
		throw new Error("svelte_element_invalid_this_value");
	}
}