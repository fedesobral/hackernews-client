import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow, render, mount } from 'enzyme';
// import { renderToJson } from 'enzyme-to-json';
import Button from '../Button';

describe('Button', () => {

	it('renders', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Button>Button</Button>, div);
	});

	// test('snapshots', () => {
	// 	const component = render(
	// 		<Button>Button</Button>
	// 	);
	// 	const tree = renderToJson(component);
	// 	expect(tree).toMatchSnapshot();
	// });

	// it('events', ()=>{
	// 	const props = {
	// 		onClick: jest.fn(),
	// 		children: 'Button'
	// 	}

	// 	const element = mount(<Button { ...props } />)

	// 	expect(props.onClick).not.toBeCalled();
	// 	element.find('button').first().simulate('click');
	// 	expect(props.onClick).toHaveBeenCalledTimes(1);
	// });
});