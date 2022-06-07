import React from 'react';
import {getHeaders} from './utils';


class AddComment extends React.Component {
  
    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
            postId: props.postId,
            text: null,
            refresh: props.refreshPost
        }
        this.addComment = this.addComment.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.focusTextInput = this.focusTextInput.bind(this);

        this.textInput = React.createRef();
    }


    addComment () {
        if (this.textInput.current.value === "") {
            return
        }
        const url = 'api/comments';
        const postData = {
            post_id: this.state.postId,
            text: this.state.text
        }
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)

        }).then(response => response.json())
        .then(data => {
            console.log(this.textInput.current.value);
            this.textInput.current.value = "";
            this.state.refresh();
            
        })
    }
    
    componentDidUpdate() {
        console.log("component did update");
    }

    handleChange = ev => {
        this.state.text = ev.target.value;
    }

    focusTextInput() {
        console.log(this);
        this.textInput.current.focus();
    }

    handleKeyDown = e => {
        if (e.key === 'Enter') {
            this.addComment();
            this.focusTextInput();
        }
    }

    render () {
        return (
            <section className="add_comment">
                <div className="add">
                        <i className="far fa-smile"></i>
                            <div className="comm">
                            <input type="text" 
                                    id="add-comm" 
                                    placeholder="Add a comment..."
                                    onChange={this.handleChange}
                                    ref = {this.textInput}
                                    onKeyDown = {this.handleKeyDown}
                                    aria-label = "Enter a comment">
                            </input>
                        </div>
                    <button className="post-button" onClick={this.addComment}
                    >Post</button>
                </div>
            </section>
        )
    }
}
// handle change has event listener ( pass in the ev, ev.target.value is contents in textbox)
// set state as the text and use that in the post

export default AddComment;