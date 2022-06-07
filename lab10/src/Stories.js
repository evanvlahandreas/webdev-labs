import React from 'react';
import {getHeaders} from './utils';

class Stories extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            stories: []
        }
        this.getStoriesFromServer()
    }

    getStoriesFromServer() {
        fetch('/api/stories', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            this.setState({
                stories: data
            })
        })
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }
     render () {
        return (
            <header className="stories">
                    {
                        this.state.stories.map(story => {
                            // console.log({story});
                            return (
                                <div>
                                    <img src={story.user.thumb_url} className="pic" alt={"profile picture for " + story.user.username} />
                                    <p>{ story.user.username }</p>
                                </div>
                            )
                        })
                    }
            </header>
        )   
    }
}

export default Stories;
