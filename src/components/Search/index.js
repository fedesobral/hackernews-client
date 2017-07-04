import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {

  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { value, onChange, onSubmit, children } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input  type='text'
                value={value}
                onChange={onChange}
                ref={(node) => { this.input = node; }} />
        <button type='submit'>
          {children}  
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired
}



// const Search = ({ value, onChange, onSubmit, children }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <input  type='text'
//               value={value}
//               onChange={onChange} />
//       <button type='submit'>
//         {children}  
//       </button>
//     </form>
//     );
// }
export default Search;