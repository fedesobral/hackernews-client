import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';
import Button from '../Button'
import Table from '../Table'
import Search from '../Search'

import {DEFAULT_QUERY,
        DEFAULT_PAGE,
        DEFAULT_HPP,
        PATH_BASE,
        PATH_SEARCH,
        PARAM_SEARCH,
        PARAM_PAGE,
        PARAM_HPP } from '../../constants';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      isLoading: false
    };

    this.needsToSearchTopstories = this.needsToSearchTopstories.bind(this);
    this.setSearchTopstories = this.setSearchTopstories.bind(this);
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    // this.onSort = this.onSort.bind(this);
  }

  needsToSearchTopstories(searchTerm){
    return !this.state.results[searchTerm];
  }

  setSearchTopstories(result){
    const {hits, page} = result;
    const {searchKey, results } = this.state;
    const oldHits = results && results[searchKey] 
      ? results[searchKey].hits 
      : [];
    const updatedHits = [...oldHits, ...hits];
    this.setState((state, props) => {
      return {
        results: {...results, [searchKey]: {hits: updatedHits, page}},
        isLoading: false 
      };
    });
  }

  fetchSearchTopstories(searchTerm, page){
    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`;
    this.setState((state, props) => ({ isLoading: true }));
    return fetch(url)
    .then(response => response.json())
    .then(result => this.setSearchTopstories(result));
  }

  onDismiss(id){
    const isNotId = item => item.objectID !== id;
    this.setState((state, props) => {
      const {searchKey, results} = state;
      const {hits, page} = results[searchKey];
      return { 
        results: {
          ...results, 
          [searchKey]: { hits: hits.filter(isNotId), page } 
        }
      }
    });
  }

  onSearchChange(event){
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event){
    const {searchTerm} = this.state;
    this.setState((state, props) =>  ({searchKey: searchTerm}));
    if(this.needsToSearchTopstories(searchTerm)){
      this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);
    }
    event.preventDefault();
  }

  componentDidMount() {
    const {searchTerm} = this.state
    this.setState((state, props) =>  ({searchKey: searchTerm}));
    this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);
  }

  render() {
    const { results, searchTerm, searchKey, isLoading } = this.state;
    const page = (results && results[searchKey] && results[searchKey].page) || DEFAULT_PAGE;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div className='page'>
        <div className='interactions'>
          <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit} >
          Search
          </Search>
        </div>
        <Table 
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss} />
        <div className='interactions'>
          <ButtonWithLoading 
            isLoading={isLoading}
            onClick={() => this.fetchSearchTopstories(searchKey, page + 1)}>
            More
          </ButtonWithLoading>
        </div>
      </div>
      );
  }
}

App.defaultProps = {
  fetchInitialData: () => {
   
  }
}

const Loading = () => <div>Loading...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>{ 
  return isLoading 
    ? <Loading />
    : <Component { ...rest } />
}
const ButtonWithLoading = withLoading(Button);

export default App;

// export {
//   Button,
//   Search,
//   Table
// }

/// React app using map and arrow function
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//       { list.map(item =>
//         <div key={item.objectID}>
//           <span>
//             <a href={item.url}>{item.title}</a>
//           </span>
//           <span>{item.author}</span>
//           <span>{item.num_comments}</span>
//           <span>{item.points}</span>
//         </div>
//         )
//       }
//       </div>
//     );
//   }
// }
