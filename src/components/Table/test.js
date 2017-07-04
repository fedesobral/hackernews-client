import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import { shallowToJson, mountToJson, renderToJson } from 'enzyme-to-json';
import Table from '../Table';

describe('Table', () => {

	const props = {
		list: [
			{ objectID: '1x', title: '1', author: '1', num_comments: 1, points: 1 },
			{ objectID: '2y', title: '2', author: '2', num_comments: 2, points: 2, url: 'www.google.com' },
		]
	}

	it('renders', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Table { ...props } />, div);
	});

	test('snapshots', () => {
		const component = render(
			<Table { ...props } />
		);
		let tree = renderToJson(component);
		expect(tree).toMatchSnapshot();
	});

	it('show 2 items in list', () => {
		const element = render(
			<Table { ...props } />
		);

		expect(element.find('.table-row').length).toBe(2);
	});

	it('show correct number of items in list', () => {
		const element = mount(
			<Table { ...props } />
		);

		expect(element.find('.table-row').length).toBe(2);

		element.setProps({ 
			list: [
				{ objectID: '1x', title: '1', author: '1', num_comments: 1, points: 1 },
				{ objectID: '2y', title: '2', author: '2', num_comments: 2, points: 2, url: 'www.google.com' },
				{ objectID: '3z', title: '3', author: '3', num_comments: 3, points: 3, url: 'www.google.com' },
			]
		});
		expect(element.find('.table-row').length).toBe(3);
	});

	it('sorted', () => {
		const sortProps = { 
			list: props.list,
			sortKey: 'TITLE', 
			activeSortKey: 'TITLE', 
			isSortReverse: true
		};

		const element = mount(
			<Table { ...sortProps } />
		);

		expect(mountToJson(element)).toMatchSnapshot();
	});
});