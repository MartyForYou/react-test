import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Blog extends Component {
    render() {
        return (
            <div id="blog">
                <div className="center">
                    <div id="content">
                        <h1>Blog</h1>
                    </div>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Blog;