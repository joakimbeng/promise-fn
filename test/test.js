import test from 'ava';
import fn from '../src';

test('sync function promise arg', async t => {
	const _greet = name => `Hello, ${name}!`;
	const greet = fn(_greet);
	const actual = await greet(Promise.resolve('Foobar'));
	t.is(actual, 'Hello, Foobar!');
});

test('sync function promise args', async t => {
	const _greet = (greeting, name) => `${greeting}, ${name}!`;
	const greet = fn(_greet);
	const actual = await greet(Promise.resolve('Howdy'), Promise.resolve('Foobar'));
	t.is(actual, 'Howdy, Foobar!');
});

test('function in promise and promise args', async t => {
	const _greet = Promise.resolve((greeting, name) => `${greeting}, ${name}!`);
	const greet = fn(_greet);
	const actual = await greet(Promise.resolve('Howdy'), Promise.resolve('Foobar'));
	t.is(actual, 'Howdy, Foobar!');
});

test('setting context', async t => {
	const obj = {
		greeting: 'Hello',
		greet(name) {
			return `${this.greeting}, ${name}!`;
		}
	};
	obj.greet = fn(obj.greet, obj);
	const actual = await obj.greet(Promise.resolve('Foobar'));
	t.is(actual, 'Hello, Foobar!');
});
