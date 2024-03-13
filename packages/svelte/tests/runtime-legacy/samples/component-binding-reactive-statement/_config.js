import { flushSync } from 'svelte';
import { test } from '../../test';

export default test({
	html: `
		<button>main 0</button>
		<button>button 0</button>
	`,

	async test({ assert, target, window }) {
		const event = new window.MouseEvent('click', { bubbles: true });

		const buttons = target.querySelectorAll('button');

		flushSync(() => {
			buttons[0].dispatchEvent(event);
		});

		assert.htmlEqual(
			target.innerHTML,
			`
			<button>main 1</button>
			<button>button 1</button>
		`
		);

		flushSync(() => {
			buttons[1].dispatchEvent(event);
		});

		assert.htmlEqual(
			target.innerHTML,
			`
			<button>main 2</button>
			<button>button 2</button>
		`
		);

		// reactive update, reset to 2
		flushSync(() => {
			buttons[0].dispatchEvent(event);
		});

		assert.htmlEqual(
			target.innerHTML,
			`
			<button>main 2</button>
			<button>button 2</button>
		`
		);

		// bound to main, reset to 2
		flushSync(() => {
			buttons[1].dispatchEvent(event);
		});

		assert.htmlEqual(
			target.innerHTML,
			`
			<button>main 2</button>
			<button>button 2</button>
		`
		);
	}
});
