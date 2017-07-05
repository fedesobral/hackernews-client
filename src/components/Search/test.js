import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search';

describe('Search', () => {

	it('renders', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Search>Search</Search>, div);
	});

});
