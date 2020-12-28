import React from 'react';
import './Slogan.css';
import Image from './Image'

class Slogan extends React.Component {

  constructor(props) {
    super(props);



    this.props = {  title: 'default\n',
                    img: '',
                    info: '',
                    id: '',
                    onClick: ""
                };


  }

  render() {
    return (
      <div id={this.props.id} onClick={this.props.onClick} className='slogan' >

          <div className='sloganTitle'>
            {this.props.title}
          </div>

          <Image className='sloganImg' img={this.props.img} />

          <div className='sloganInfo'>
            {this.props.info}
          </div>

      </div>

    );
  }
}

export default Slogan;
