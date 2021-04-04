import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { NavItems } from "./NavItems";
import MenuIcon from "./MenuIcon"
import './Navbar.css'
import './MenuIcon.css'
import Image from './Image';

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
        /*window.history.pushState("object or string", "Title", "/new-url");*/
    }

    render () {

        return (
            <nav>

                <div className={ this.state.clicked ? 'top-bar active' : 'top-bar' }>

                    <div className="top-container">
                        <div className={ this.state.clicked ? 'logo active' : 'logo' }>
                            <h2>Carter</h2>
                            <Image className='logo-img' img='logo.png' />
                        </div>

                        <div className={ this.state.clicked ? 'menu-icon active' : 'menu-icon' }
                        onClick={this.handleClick}>
                            <div class={this.state.clicked ? "change container" : 'container'}>
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div>
                        </div>

                        <ul className='top-list'>
                            {NavItems.map((item, index) => {
                                return (
                                    <li className='item'><Link className='item-link'
                                    to={item.url}>{item.title}</Link></li>
                                )
                            })}
                            <li><Link id='contactButton' className='btn' to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={ this.state.clicked ? 'menu active' : 'menu' }>
                    <ul className='list'>
                        {NavItems.map((item, index) => {
                            return (
                                <li onClick={this.handleClick} className='item'><Link className='item-link'
                                to={item.url}>{item.title}</Link></li>
                            )
                        })}
                        <li onClick={this.handleClick} className="button"><Link className='btn' to='/contact'>Contact</Link></li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Navbar
