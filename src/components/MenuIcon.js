import React, { Component } from 'react';
import './MenuIcon.css'

class MenuIcon extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render () {
        return (
            <div class={this.state.clicked ? "change container" : 'container'}
            onClick={this.handleClick}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>


        )
    }
}

export default MenuIcon
