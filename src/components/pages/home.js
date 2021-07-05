import React, { Component } from 'react';
import Slider from '../slider';
import Sidebar from '../sidebar';

class Home extends Component {
    render() {
        let btnString = "Ir al blog";

        return (
            <div id="home">
                <Slider title="Martin Navarro" btnString={btnString} />
                <div className="center">
                    <div id="content">
                        <h1>Inicio</h1>
                    </div>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Home;