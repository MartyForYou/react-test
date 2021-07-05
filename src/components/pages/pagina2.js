import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Pagina2 extends Component {
    render() {
        return (
            <div id="pagina2">
                <div className="center">
                    <h1>Pagina2</h1>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Pagina2;