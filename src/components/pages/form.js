import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Form extends Component {
    render() {
        return (
            <div id="form">
                <Slider
                    title="Formulario"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        Complete sus datos aqui
                    </div>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Form;