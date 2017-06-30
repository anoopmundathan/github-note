import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Profile from './Profile';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      profile: {}
    }
  }

  onSearch(name) {
    this.setState({
      username: name
    });
    const apiUrl = `https://api.github.com/users/${name}`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          profile: data
        });
      });
  }

  render() {
    const userName = this.state.username;
    return (
      <div className='container'>
        {!userName 
          ?
          <Search
            onSearch={this.onSearch.bind(this)}/>
          :
          <Profile 
            github={this.state.profile}/>
        }
      </div>
    );
  }
}

export default App;
