import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from '.';

describe("Search", () => {
	it("Renders", () => {
		const div = document.createElement('div');
	  ReactDOM.render(<Search>Search</Search>, div);
	});

	it('Snapshot click me Search', () => {
		const tree = renderer.create(<Search>Search</Search>).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Snapshot value Search', () => {
		const tree = renderer.create(<Search value="keys">Find</Search>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	//onChange, onSubmit
});