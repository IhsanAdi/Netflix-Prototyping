import React, { Component } from 'react';

class HeroButton extends Component {
    render(){
        return(
            <a href="#" className="HeroButton" data-primary={this.props.primary}>{this.props.text}</a>
        )
    }
}

export default HeroButton;
