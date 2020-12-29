import React, {Component} from 'react'
import ProjectInfo from '../components/ProjectInfo'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Projects.css'

class About extends Component {
render() {
return (
    <div >

        <div className='header'> What have I been Working On?</div>

        <ProjectInfo title='Love Hertz (Love2D)'
            summary="A ''Jump 'N Shoot'' game engine
				and level editor coded in Lua with the Love2D platform"
            img='gameshot.png'
        >
            <Link className='btn' to="/Downloads/Love Hertz.zip" target="_blank" download>
                Download
            </Link>
            <br></br>
            <br></br>
            <a className='github' href='https://github.com/carterghill/LoveHertz2.0'>Github</a>
        </ProjectInfo>

        <br></br>

        <ProjectInfo title='Rocket Girl (Unity)'
            summary="A 2D platformer that plays with 3D space. Heavily inspired by Fez, and you can try it online!"
            img='rocketshot.png'
        >
            <a className='btn' href="http://joel.hillspawn.com/RocketGirl/">
                Try Online!
            </a>
            <br></br>
            <br></br>
            <a className='github' href='https://github.com/joelghill/RocketGirl/'>Github</a>
        </ProjectInfo>

    </div>
)
}
}

export default About
