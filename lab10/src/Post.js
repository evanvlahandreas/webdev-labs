import React from 'react';
import {getHeaders} from './utils';
import Posts from './Posts';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import AddComment from './AddComment';

class Post extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            post: props.model
        }
        this.refreshPostDataFromServer = this.refreshPostDataFromServer.bind(this);

    }

    componentDidMount() {
        // fetch posts and then set the state...
    }


    refreshPostDataFromServer () {
        // console.log('hello');
        // re-fetch the post:
        const url = '/api/posts/' + this.state.post.id;
        fetch(url, {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            this.setState({
                post: data
            });
        })
    }
     render () {
        const post = this.state.post
        return (
            <section 
                className="post">
                <header className="title">
                    <h2 className = "name">{post.user.username}</h2>
                    <i className="fas fa-ellipsis-h"></i>
                </header>
                <img src={post.image_url} className ="pic" alt={"post by " + post.user.username}/>
                <section className="engagement">
                    <div className = "action-bar">
                        <div className = "actions">
                            <LikeButton 
                            likeId ={post.current_user_like_id} 
                            postId = {post.id}
                            refreshPost = {this.refreshPostDataFromServer}/>
                            <i className="far fa-comment fa-lg"></i>
                            <i className="far fa-paper-plane fa-lg" ></i>
                        </div>
                        <BookmarkButton
                        bookmarkId ={post.current_user_bookmark_id} 
                        postId = {post.id}
                        refreshPost = {this.refreshPostDataFromServer}/>
                    </div>
                    <div className = "like-count"><b>{post.likes.length} likes</b></div>
                    
                    <div className = "text">
                        <div className="caption">
                            <span><b>{post.user.username} </b></span>
                            <span>{post.caption}</span>
                            <button type = "button">more</button>
                        </div>

                        <div className="time_ago">
                        <div className="txt">{post.display_time}</div>
                        </div>
                        {displayComments(post)}
                    </div>
                </section>
                <AddComment
                    postId = {post.id}
                    refreshPost = {this.refreshPostDataFromServer}
                    />
        </section>
        )
        
    }
}

const displayComments = post => {
    if (post.comments.length > 1) {
        // display button
        return ( 
            <div>
                <div>
                    <button type="button" 
                        className="open" 
                        data-post-id={post.id}
                        id = "view-more">
                        View all { post.comments.length} comments 
                    </button>

                    <div className="caption">
                        <span id="name">
                        <b> {post.comments[(post.comments.length - 1)].user.username} </b></span>
                        <span id="content"> {post.comments[(post.comments.length - 1)].text}</span>
                    </div>
                </div>

                    <div id="comment_display_time" className="time_ago">
                    <div className="txt">{post.comments[(post.comments.length - 1)].display_time}</div>
                </div>
            </div>
)
    } else if (post.comments.length === 1) {
        //display single comment
        return (
            <div>
                <div>
                    <div className="caption">
                        <span id="name">
                        <b> {post.comments[(post.comments.length - 1)].user.username} </b></span>
                        <span id="content"> {post.comments[(post.comments.length - 1)].text}</span>
                    </div>
                </div>

                <div id="comment_display_time" className="time_ago">
                    <div className="txt">{post.comments[(post.comments.length - 1)].display_time}</div>
                </div>
            </div>)
    } else {
        return
    }
}

export default Post;