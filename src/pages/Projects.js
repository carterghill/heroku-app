import React, {Component} from 'react'
import ProjectInfo from '../components/ProjectInfo'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Projects.css'

class About extends Component {
render() {
return (
    <div >

        <div className='header'> What have I been Working On?</div>

        <ProjectInfo>
            <Link className='btn' to="/Downloads/Love Hertz.zip" target="_blank" download>
                Download
            </Link>
            <br></br>
            <br></br>
            <a className='github' href='https://github.com/carterghill/LoveHertz2.0'> Github </a>
        </ProjectInfo>

    </div>
)
}
}

export default About
