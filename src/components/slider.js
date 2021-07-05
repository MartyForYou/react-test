import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div id="slider" className="slider-big">
                <h1>Proyecto final de curso de React JS por {this.props.title}</h1>
                <a href="/#" className="btn-white">{this.props.btnString}</a>
            </div>
        )
    }
}

export default Slider;