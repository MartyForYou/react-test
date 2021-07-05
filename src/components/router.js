import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componentes
import Peliculas from './pages/peliculas';
import Blog from './pages/blog';
import Form from './pages/form';
import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';
import Header from './header';
import Slider from './slider';
import Sidebar from './sidebar';
import Footer from './footer';
import Error from './error';

class Router extends Component {
    render() {
        let btnString = "Ir al blog";

        return (
            <BrowserRouter>
                <Header />

                <Slider title="Martin Navarro" btnString={btnString} />

                <div className="center">

                    {/* Rutas */}
                    <Switch>
                        <Route exact path="/" component={Peliculas} />
                        <Route exact path="/home" component={Peliculas} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/form" component={Form} />
                        <Route exact path="/pagina1" component={Pagina1} />
                        <Route exact path="/pagina2" component={Pagina2} />

                        {/* Error */}
                        <Route component={Error} />
                    </Switch>

                    <Sidebar />

                    <div className="clearfix"></div>
                </div>

                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;