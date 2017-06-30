import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return(
      <div>
        <input
            className='username'
            type='text'
            value={this.state.name}
            onChange={this.onChange.bind(this)}
          />
        <input 
            className='search'
            type='button'
            value='Search'
            onClick={this.props.onSearch.bind(null, this.state.name)}/>
      </div>
    );
  }
}

Search.PropTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Search;