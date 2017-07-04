import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sortBy } from 'lodash';
import Button from '../Button'
import './index.css'

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments'),
  POINTS: list => sortBy(list, 'points'),
}

const isSearched = (searchTerm) => (item) => {
  return !searchTerm || !item.title || item.title.toLowerCase().includes(searchTerm.toLowerCase());
};

export class Table extends Component {
  constructor(props){
    super(props);

    this.state = { 
      sortKey: 'NONE',
      isSortReverse: false
    };

    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey){
    this.setState((state, props) => ({ sortKey, isSortReverse: sortKey === state.sortKey && !state.isSortReverse  }));
  }

  render() {
    const { list, pattern, onDismiss } = this.props;
    const { sortKey, isSortReverse } = this.state;
    const sortedList = SORTS[sortKey](list.filter(isSearched(pattern)));
    const reverseSortedList = isSortReverse 
      ? sortedList.reverse()
      : sortedList;
    return (
      <div className='table'>
        <TableHeader 
          onSort={this.onSort}
          activeSortKey={sortKey}
          isSortReverse={isSortReverse}
        ></TableHeader>
        <div className='table-body'> 
        { 
          reverseSortedList.map(item => (
            <TableRow key={item.objectID} item={item} onDismiss={onDismiss} />) ) 
        }
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape({
        objectID: PropTypes.string,
        url: PropTypes.string, 
        title: PropTypes.string, 
        author: PropTypes.string, 
        num_comments: PropTypes.number, 
        points: PropTypes.number
      })
    ).isRequired,
  pattern: PropTypes.string,
  onDismiss: PropTypes.func
}

const TableRow = ({item, onDismiss}) => {
    const {objectID, url, title, author, num_comments, points} = item;
    return (
      <div className='table-row'>
        <span className='midColumn'>
        <a href={url}>{title}</a>
        </span>
        <span className='midColumn'>{author}</span>
        <span className='smallColumn'>{num_comments}</span>
        <span className='smallColumn'>{points}</span>
        <span className='smallColumn'>
        <Button onClick={() => onDismiss(objectID)}
        className='button-inline' >
        Dismiss
        </Button> 
        </span>
      </div>
    );
}

const TableHeader = ({ onSort, activeSortKey, isSortReverse }) => {
  return (
    <div className='table-header'>
      <span className='midColumn'>
        <Sort 
          sortKey={'TITLE'}
          onSort={onSort}
          activeSortKey={activeSortKey}
          isSortReverse={isSortReverse}
         >Title</Sort>
      </span>
      <span className='midColumn'>
        <Sort 
          sortKey={'AUTHOR'}
          onSort={onSort}
          activeSortKey={activeSortKey}
          isSortReverse={isSortReverse}
         >Author</Sort>
      </span>
      <span className='smallColumn'>
        <Sort 
          sortKey={'COMMENTS'}
          onSort={onSort}
          activeSortKey={activeSortKey}
          isSortReverse={isSortReverse}
         >Comments</Sort>
      </span>
      <span className='smallColumn'>
        <Sort 
          sortKey={'POINTS'}
          onSort={onSort}
          activeSortKey={activeSortKey}
          isSortReverse={isSortReverse}
         >Points</Sort>
      </span>
      <span className='smallColumn'>
      <Button>Archive</Button>
      </span>
    </div>
    );
}

const Sort = ({ sortKey, onSort, activeSortKey, isSortReverse, children }) =>{
  const sortClass = classNames(
    'button-inline',
    {'button-active': sortKey === activeSortKey}
  );
  const sortOrderClass = classNames(
    'fa',
    {'fa-caret-up':  sortKey === activeSortKey && !isSortReverse},
    {'fa-caret-down':  sortKey === activeSortKey && isSortReverse},
  );
  return (
    <Button 
      onClick={() => onSort(sortKey) }
      className={sortClass}
    >
      {children}
      <span className={sortOrderClass}></span>
    </Button>
    );
}

TableRow.propTypes = {
  item: PropTypes.shape({
      objectID: PropTypes.string,
      url: PropTypes.string, 
      title: PropTypes.string, 
      author: PropTypes.string, 
      num_comments: PropTypes.number, 
      points: PropTypes.number
  }).isRequired,
  onDismiss: PropTypes.func
}

export default Table;
