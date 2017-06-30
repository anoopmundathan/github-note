import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    return(
      <div className='profile-container'>
        <img 
            src={this.props.github.avatar_url}
            alt='github profile'/>
        <div className='profile'>
          <p>Profile</p>
        </div>
        <div className='repo'>
          <p>Repo</p>
        </div>
        <div className='notes'>
          <p>Notes</p>
        </div>
      </div>
    );
  }
}

Profile.PropTypes = {
  github: PropTypes.object.isRequired
}

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
