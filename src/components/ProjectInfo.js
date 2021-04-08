import React, { Component } from 'react';
import Image from './Image';
import './ProjectInfo.css'

class ProjectInfo extends Component {

constructor(props) {
    super(props);
}

render () {
return (
    <nav className='project'>

        <div className='productImgContainer'>
            <Image className='projectImg' img={this.props.img}/>
        </div>

		<div className='projectInfo'>
			<div className='projectHeader'>{this.props.title}</div>

			<div className='projectSum'>{this.props.summary}</div>

            {this.props.children}

		</div>

    </nav>
)
}
}

export default ProjectInfo
