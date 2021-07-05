import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componentes
import Home from './pages/home';
import Blog from './pages/blog';
import Form from './pages/form';
import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';
import Header from './header';
import Footer from './footer';
import Error from './error';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                    {/* Rutas */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/form" component={Form} />
                        <Route exact path="/pagina1" component={Pagina1} />
                        <Route exact path="/pagina2" component={Pagina2} />

                        {/* Error */}
                        <Route component={Error} />
                    </Switch>

                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;