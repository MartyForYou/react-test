import React, { Component } from 'react';
import Slider from '../slider';
import Sidebar from '../sidebar';

class Blog extends Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos */}
                        <h1>Ultimos articulos</h1>
                    </div>
                    <Sidebar blog="true" />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Blog;