import React, {Component} from 'react'
import Slogan from '../components/Slogan'
import ProjectInfo from '../components/ProjectInfo'
import {Link} from 'react-router-dom'
import "./Home.css"

class Home extends Component {

    componentDidMount() {
  window.scrollTo(0, 0)
}

    state = {
        timerStart: Date.now(),
        time: 0,
        slogan1Class: 'slogan1Start',
        slogan2Class: 'slogan2Start',
        slogan3Class: 'slogan3Start'
    };

    timer = setInterval(() => {
        this.setState({
            time: Date.now() - this.state.timerStart
        });
        if (this.state.time < 7000) {
            this.setState({ slogan1Class: 'slogan1' });
            if (this.state.slogan2Class === 'slogan2Start') {
                return;
            }
            this.setState({
                slogan2Class: 'slogan2Out',
                slogan3Class: 'slogan3Out'
            });
        } else if (this.state.time < 14000) {
            this.setState({
                slogan1Class: 'slogan1Out',
                slogan2Class: 'slogan2'
            });
        } else if (this.state.time < 21000 && this.state.time > 14000) {
            this.setState({
                slogan1Class: 'slogan1Out',
                slogan2Class: 'slogan2Out',
                slogan3Class: 'slogan3'
            });
        } else if (this.state.time > 21000) {
            this.setState({
                time: 0,
                timerStart: Date.now()
            });
        }

    }, 10);

    handleClick = () => {
        this.setState({ timer: this.state.timer + 7000 });
    }

    render() {
        return (
        <div>

            <div className='header'>Web, Game, and Custom App Development</div>

            <div className='homeSlogans'>
            <Slogan id={ this.state.slogan1Class } title='Thoughtful Design'
                onClick={this.handleClick}
                img='brushlogo.png'
                info=""
                />
            <Slogan id={ this.state.slogan2Class } title='Efficient Code'
            onClick={this.handleClick}
                img='codelogo.png'
                info=""
                />
            <Slogan id={ this.state.slogan3Class } title='Tailored For You'
                img='tielogo.png'
                onClick={this.handleClick}
                info=""
                />
            </div>

            <div className='homeTitle'>
                Some of my work...
            </div>


            <ProjectInfo className='homeProject' title='Love Hertz (Love2D)'
                summary="A ''Jump 'N Shoot'' game engine
    				and level editor coded in Lua with the Love2D platform."
                img='gameshot.png'
            >
                <Link className='btn' to="/Downloads/Love Hertz.zip" target="_blank" download>
                    Download
                </Link>
                <br></br>
                <br></br>
                <a className='github' href='https://github.com/carterghill/LoveHertz2.0'>Github</a>
            </ProjectInfo>


            <ProjectInfo title='Pack Mentality'
                summary="The website for a new business venture that aims to provide quality and affordable pet food."
                img='packmentality.png'
            >
                <a className='btn' href="http://packmentality.ca">
                    Visit Website
                </a>
            </ProjectInfo>

            <br></br>

            <div className='homeTitle'>
                What programs am I using?
            </div>

            <ProjectInfo title='Atom' img='atom.png'
                summary='A fully editable text editor and IDE with all sorts of plugins to
                help streamline your coding.'>
                    <br></br>
                    <a href='https://atom.io' className='btn'> Visit Website</a>
            </ProjectInfo>

            <ProjectInfo title='Love2d' img='love2dshot.png'
                summary='A simple but powerful 2D game engine and framework that allows
                    for seemless and flexible code.'>
                    <br></br>
                    <a href='https://love2d.org' className='btn'>Visit Website</a>
            </ProjectInfo>

        </div>
        )
    }
}

export default Home
