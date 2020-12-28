import Footer from './Footer'
import "./Layout.css"
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <div className='header'> Header </div>
                <div className='content'>{this.props.children}</div>
                <Footer/>
            </div>
        )
    }
}

export default Layout
