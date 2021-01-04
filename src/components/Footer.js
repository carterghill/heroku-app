import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Footer.css'

class Footer extends Component {

    handleClick = () => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className='footer'>
                <ul className='footerList'>
    				<li><Link onClick={this.handleClick} className='footerLink' to='/home'>Home</Link></li>
                    <li>•</li>
                    <li><Link className='footerLink' to='/about'>About</Link></li>
                    <li>•</li>
                    <li><Link className='footerLink' to='/projects'>Projects</Link></li>
                    <li>•</li>
                    <li><Link className='footerLink' to='/resources'>Resources</Link></li>
                    <li>•</li>
                    <li><Link className='footerLink' to='/contact'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Footer
