import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Form extends Component {
    render() {
        return (
            <div id="form">
                <div className="center">
                    <h1>Formulario</h1>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Form;