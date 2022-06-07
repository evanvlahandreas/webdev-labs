import React from 'react';
import {getHeaders} from './utils';
import Post from './Post';

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        // initialization code here
        this.getPostsFromServer()
    }

    getPostsFromServer () {
        fetch('/api/posts', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                posts: data // resets user state to data, triggering a redraw
            })
        })
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return this.state.posts.length === 0 ? // if statement
            (<div id="posts">Loading posts...</div>)
            : // else
            (
                <div id="posts">
                    {
                        this.state.posts.map(post => { // loops through the list of posts and builds a div for each one
                            return (
                                <Post model={post} key={'post_' + post.id}/>
                            )
                        })
                    }
                </div>
            )
    }
}

export default Posts;