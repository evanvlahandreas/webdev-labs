import React from 'react';

class NavBar extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
    }



    componentDidMount() {
        // fetch posts and then set the state...
    }
     render () {
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1> 

                <div>
                    <a href="/api">API Docs</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Sign out</a>
                </div>
                {/* Navigation Links */}
            </nav>
        )   
    }
}

export default NavBar;