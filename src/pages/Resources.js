import React, {Component} from 'react'
import ProjectInfo from '../components/ProjectInfo'

class Resources extends Component {



render() {
return (
    <div >

        <div className='header'>Software That I Use</div>

        <ProjectInfo title='Atom' img='atom.png'
            summary='A fully editable text editor and IDE with all sorts of plugins to
            help streamline your coding.'>
                <br></br>
                <a href='https://atom.io' className='btn'> Visit Website</a>
        </ProjectInfo>

    </div>
)
}
}

export default Resources
