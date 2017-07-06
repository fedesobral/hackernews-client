import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, mount } from 'enzyme';
import { renderToJson, mountToJson } from 'enzyme-to-json';
import Search from '.';

describe("Search", () => {
	it("Renders", () => {
		const div = document.createElement('div');
	  ReactDOM.render(<Search>Search</Search>, div);
	});

	function createNodeMock(element) {
	  if (element.type === 'input') {
	    return {
	      focus() {},
	    };
	  }
	  return null;
	}
	const options = {createNodeMock};

	it('Snapshot click me Search', () => {
		const tree = renderer.create(<Search>Search</Search>, options).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('Snapshot value Search', () => {
		const tree = renderer.create(<Search value="keys">Find</Search>, options).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Enzyme snapshot', () =>{
		const component = render(<Search>Search</Search>);
		const tree = renderToJson(component);
		expect(tree).toMatchSnapshot();
	});

	it('Enzyme snapshot mount', () =>{
		const component = mount(<Search>Search</Search>);
		const tree = mountToJson(component);
		expect(tree).toMatchSnapshot();
	});

	it('Event onChange', () => {
		const onChange = jest.fn();
		const element = mount(<Search onChange={onChange}>Search</Search>);

    expect(onChange).not.toBeCalled();
		element.find('input[type="text"]').simulate('change');
		expect(onChange).toHaveBeenCalledTimes(1);
	});

	it('Event onSubmit', () => {
		const props = { 
			onSubmit: jest.fn(),
			onChange: jest.fn(),
			value: "keys",
		};
		const element = mount(
			<Search {...props}>Find</Search>
			);

    expect(props.onSubmit).not.toBeCalled();
		element.find('form').simulate('submit');
		expect(props.onSubmit).toHaveBeenCalledTimes(1);
	});
});