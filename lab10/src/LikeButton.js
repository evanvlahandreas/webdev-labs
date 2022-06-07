import React from 'react';
import {getHeaders} from './utils';
import Post from './Post';

class LikeButton extends React.Component {
  
    constructor(props) {
        super(props);

        // binding "this":
        this.toggleLike = this.toggleLike.bind(this);
        this.addLike = this.addLike.bind(this);
        this.removeLike = this.removeLike.bind(this);

    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleLike () {
        if (this.props.likeId) {
            this.removeLike();
        } else {
            this.addLike();
        }
    }

    addLike () {
        // fetch: POST /api/posts/likes
        const url = '/api/posts/likes';
        const postData = {
            post_id: this.props.postId
        }
        console.log('create like', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.refreshPost() // calls parent's method
        })

    }

    removeLike () {
        // fetch: DELETE /api/posts/likes/{likeId}
        const url = '/api/posts/likes/' + this.props.likeId;
        console.log('remove like', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.refreshPost() // calls parent's method
        })
    }

    render () {
        const likeId = this.props.likeId;
        const heartFill = (likeId ? 'fas' : 'far') + ' fa-heart';
        const liked = (likeId ? true : false)
        return (
            <button onClick={this.toggleLike} aria-label="Like / Unlike" aria-checked={liked} role="switch">
                <i className={heartFill}></i>
            </button>
        )
    }

}

export default LikeButton;