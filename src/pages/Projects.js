import React, {Component} from 'react'
import ProjectInfo from '../components/ProjectInfo'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Projects.css'

var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { link: "/Downloads/Love Hertz.zip" };

        if (OSName.localeCompare("Mac") == 0) {
            this.state = { link: "/Downloads/Love Hertz(Mac).zip" };
        }

    }

render() {
return (
    <div >

        <div className='header'> What have I been Working On?</div>

        <ProjectInfo title='Love Hertz (Love2D)'
            summary="A ''Jump 'N Shoot'' game engine
				         and level editor coded in Lua with the Love2D platform"
            img='gameshot.png'
        >
            <Link className='btn' to={this.state.link} target="_blank" download>
                Download
            </Link>
            <br></br>
            <br></br>
            <a className='github' href='https://github.com/carterghill/LoveHertz2.0'>Github</a>
        </ProjectInfo>

        <br></br>

        <ProjectInfo title='Pack Mentality'
            summary="The website for a new business venture that aims to provide quality and affordable pet food."
            img='packmentality.png'
        >
            <a className='btn' href="http://packmentality.ca">
                Visit Website
            </a>
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

        <br></br>

        <ProjectInfo title='Bobby Big Bot'
            summary='A custom Discord bot made specifically for my community Smash Bros. Melee server.
                It contains administrative commands as well as framedata for characters.'
            img='discordjs.png'
        >
            <a href='https://github.com/carterghill/BobbyBigBot' className='btn'>
                Github
            </a>
        </ProjectInfo>

    </div>
)
}
}

export default Projects
