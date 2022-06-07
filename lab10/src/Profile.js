import React from 'react';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
    }
    componentDidMount() {
        // fetch posts and then set the state...
    }

     render () {
        return (
            <header id="profile">
                   <img src={this.props.pic} className="pic" alt={"profile picture for " + this.props.username}></img>
                   <p>{this.props.username}</p>
            </header>
        )   
    }
}

export default Profile;
