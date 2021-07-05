import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Pagina1 extends Component {
    render() {
        return (
            <div id="pagina1">
                <div className="center">
                    <h1>Pagina 1</h1>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Pagina1;