import React, { Component } from 'react';
import Image from './Image';
import './ProjectInfo.css'

class ProjectInfo extends Component {

render () {
return (
    <nav className='project'>

    	<Image className='projectImg' img='gameshot.png'/>

		<div className='projectInfo'>
			<div className='projectHeader'> Love Hertz (Love2D) </div>

			<div className='projectSum'> A "Jump 'N Shoot" game engine
				and level editor coded in Lua with the Love2D platform </div>

            {this.props.children}

		</div>

    </nav>
)
}
}

export default ProjectInfo
