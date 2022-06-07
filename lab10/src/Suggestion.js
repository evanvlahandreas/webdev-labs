import React from 'react';
import {getHeaders} from './utils';
import Suggestions from './Suggestions';

class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestion: props.model,
            followId: null
        }
        this.toggleFollow = this.toggleFollow.bind(this);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }

    componentDidMount() {
    }

    toggleFollow () {
        if (! this.state.followId) {
            this.follow()
        } else {
            this.unfollow()
        }
    }
    follow () {
        const url = 'api/following/';
        const suggestionData = {
            user_id: this.props.model.id
        }
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(suggestionData)

        }).then(response => response.json())
        .then(data => {
            this.setState({
                followId: data.id
            });
        })

    }
    unfollow () {
        const url = 'api/following/' + this.state.followId;
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            this.setState({
                followId: null
            });
        })
    }
     render () {
        const suggestion = this.state.suggestion
        const followId = this.state.followId;
        const followClass = (followId ? 'unfollow' : 'follow');
        const followed = (followId ? true : false)
        return (
            <div className='suggestion'>
                <img src={suggestion.thumb_url} alt ={"profile picture for " + suggestion.username} />
                <div className='profile-name'>
                    <p className="username">{suggestion.username}</p>
                    <p className="suggestion-text">suggested for you</p>
                </div>
                <div>
                    <button
                        className={followClass}
                        aria-label="Follow / Unfollow"
                        aria-checked={followed}
                        onClick={this.toggleFollow}
                        >{followClass}
                    </button>
                </div>
            </div>
        )
    }
}
export default Suggestion;