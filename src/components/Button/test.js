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
});