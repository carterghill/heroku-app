import Footer from './Footer'
import Navbar from './Navbar'
import "./Layout.css"
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <Navbar/>
                <div className='content'>{this.props.children}</div>
                <Footer/>
            </div>
        )
    }
}

export default Layout
