import Footer from './Footer'
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <div className='header'> Header </div>
                <div className='content'>{this.props.children}</div>
                <div className='footer'> Footer </div>
            </div>
        )
    }
}

export default Layout
