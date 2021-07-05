import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Pagina2 extends Component {
    render() {
        return (
            <div id="pagina2">
                <div className="center">
                    <div id="content">
                        <h1>Pagina 2</h1>
                    </div>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Pagina2;