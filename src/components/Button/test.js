import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from '.';

describe("Button", () => {
	it("Renders", () => {
		const div = document.createElement('div');
	  ReactDOM.render(<Button>Button</Button>, div);
	});

	it('Snapshot click me button', () => {
		const component = renderer.create(<Button>Click me</Button>);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Snapshot className button', () => {
		const tree = renderer.create(<Button className="awesome-btn">Click me</Button>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Event onClick called only once', ()=>{
		const onClick = jest.fn();

		const component = renderer.create(<Button onClick={onClick}>Click me</Button>);
		const tree = component.toJSON();

		expect(onClick).not.toBeCalled();
		tree.props.onClick();
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});