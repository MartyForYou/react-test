import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Form extends Component {
    render() {
        return (
            <div id="form">
                <div className="center">
                    <div id="content">
                        <h1>Formulario</h1>
                    </div>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Form;