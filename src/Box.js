import React, { Component} from 'react';
import './Box.css'

class Box extends React.Component {

    onClick = () => {
        const audio = new Audio(this.props.track.name);
        audio.play();
    }

    render () {

        return(
          
            <button className="box" onClick={this.onClick}>
                {this.props.track.text}
        </button>
        )
    }

}

export default Box;