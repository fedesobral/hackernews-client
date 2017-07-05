import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow, render, mount } from 'enzyme';
// import { renderToJson } from 'enzyme-to-json';
import Search from '../Search';

describe('Search', () => {

	it('renders', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Search>Search</Search>, div);
	});

	// test('snapshots', () => {
	// 	// const createNodeMock = function () {
	// 	//   // You can return anything from this function.
	// 	//   // For example:
	// 	//   return focus() {
	// 	//       // Do nothing
	// 	//   }
	// 	// }
	// 	const component = render(
	// 		<Search onSubmit={jest.fn()}>Search</Search>
	// 	);
	// 	const tree = renderToJson(component);
	// 	expect(tree).toMatchSnapshot();
	// });

	// test('events', () => {
	// 	const props = { 
	// 		value: 'search',
	// 		onSubmit: jest.fn(),
	// 		onChange: jest.fn()
	// 	};
	// 	const element = mount(
	// 		<Search { ...props }>Search</Search>
	// 	);

 //    	expect(props.onChange).not.toBeCalled();
	// 	element.find('input[type="text"]').simulate('change');
	// 	expect(props.onChange).toHaveBeenCalledTimes(1);

 //    	expect(props.onSubmit).not.toBeCalled();
	// 	element.find('form').simulate('submit');
	// 	expect(props.onSubmit).toHaveBeenCalledTimes(1);
	// });
});
