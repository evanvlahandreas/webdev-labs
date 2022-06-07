import React from 'react';
import {getHeaders} from './utils';
import Post from './Post';

class BookmarkButton extends React.Component {
  
    constructor(props) {
        super(props);

        // binding "this":
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.addBookmark = this.addBookmark.bind(this);
        this.removeBookmark = this.removeBookmark.bind(this);

    }


    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleBookmark () {
        if (this.props.bookmarkId) {
            this.removeBookmark();
        } else {
            this.addBookmark();
        }
    }

    addBookmark () {
        // fetch: POST /api/bookmarks
        const url = '/api/bookmarks';
        const postData = {
            post_id: this.props.postId
        }
        console.log('create bookmark', url);
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

    removeBookmark () {
        // fetch: DELETE /api/bookmarks/{bookmarkId}
        const url = '/api/bookmarks/' + this.props.bookmarkId;
        console.log('remove bookmark', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.refreshPost(); // calls parent's method
        })
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        const bookmarkFill = (bookmarkId ? 'fas' : 'far') + ' fa-bookmark';
        const bookmarked = (bookmarkId ? true : false)
        return (
            <button onClick={this.toggleBookmark} aria-label="Bookmark / Unbookmark" aria-checked={bookmarked} role="switch">
                <i className={bookmarkFill}></i>
            </button>
        )
    }

}

export default BookmarkButton;