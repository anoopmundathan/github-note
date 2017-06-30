import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileInfo extends Component {
    render() {
        console.log(this.props.profile);
        return(
            <div>
                <ul>
                    <li>{this.props.profile.bio}</li>
                    <li>{this.props.profile.company}</li>
                    <li>{this.props.profile.followers}</li>
                </ul>
            </div>
        );
    }
}

ProfileInfo.PropTypes = {
    profile: PropTypes.object.isRequired
}

class Repo extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>{this.props.repo.repo}</li>
                    <li>{this.props.repo.gist}</li>
                </ul>
            </div>
        );
    }
}

ProfileInfo.PropTypes = {
    repo: PropTypes.object.isRequired
}

class Notes extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </div>
        );
    }
}

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            repo: '',
            notes: ''
        }
    }

    onProfile() {
        this.setState({
            profile: 'clicked'
        });
    }

    onRepo() {
        this.setState({
            repo: 'clicked'
        });
    }

    onNotes() {
        this.setState({
            notes: 'clicked'
        });
    }

    render() {
        console.log(this.props.github);

        const profile = {
            bio: this.props.github.bio,
            company: this.props.github.company,
            followers: this.props.github.followers
        }

        const repo = {
            repo: this.props.github.public_repos,
            gist: this.props.github.public_gists
        }

        return(
        <div className='profile-container'>
            <img 
                src={this.props.github.avatar_url}
                alt='github profile'/>
            <div className='profile'>
                {!this.state.profile
                ?
                <p onClick={this.onProfile.bind(this)}>Profile</p>
                :
                <ProfileInfo 
                    profile={profile}/>
                }
            </div>
            <div className='repo'>
                {!this.state.repo
                ?
                <p onClick={this.onRepo.bind(this)}>Repo</p>
                :
                <Repo 
                    repo={repo}/>
                }
            </div>

            <div className='notes'>
                {!this.state.notes
                ?
                <p onClick={this.onNotes.bind(this)}>Notes</p>
                :
                <Notes />
                }
            </div>
        </div>
        );
    }
}

Profile.PropTypes = {
  github: PropTypes.object.isRequired
}

export default Profile;