import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson, mountToJson, renderToJson } from 'enzyme-to-json';
import App from '../App';

describe('App', () => {

	it('renders', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	});

	test('snapshots', () => {
		const createNodeMock = function () {
		  // You can return anything from this function.
		  // For example:
		  return {
		    focus() {
		      // Do nothing
		    }
		  }
		}
		const component = mount(
			<App isLoading={false} />
			, {createNodeMock}
		);

		let tree = mountToJson(component); //component.toJSON();
		expect(tree).toMatchSnapshot();

		component.setState({ isLoading: true });
		component.update();
		tree = mountToJson(component); 
		expect(tree).toMatchSnapshot();
	});

	// it('pagination', () => {
	// 	const element = mount(<App />);
	// 	element.props.fetchInitialData();
	// 	element.update();
	// 	expect(element.find('.table-row').length).toBe(100);
	// });
});
