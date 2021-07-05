import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Componentes
import Peliculas from './peliculas';
import SeccionPruebas from './seccionPruebas';
import Error from './error';
import ComponenteUno from './componenteUno';
import Header from './header';
import Slider from './slider';
import Sidebar from './sidebar';
import Footer from './footer';

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
                        <Route exact path="/home" component={Peliculas} />
                        <Route exact path="/home" component={Peliculas} />
                        
                        <Route exact path="/prueba" component={SeccionPruebas} />
                        <Route exact path="/prueba2" render={() => (
                            <div id="content">
                                <h1>Hola Universo!!!</h1>
                                <ComponenteUno saludo="Buenaaas" />
                            </div>
                        )} />
                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                            let nombre = props.match.params.nombre;
                            let apellidos = props.match.params.apellidos;

                            return (
                                <div id="content">
                                    <h2 className="subheader">Pagina de pruebas</h2>
                                    <h3>
                                        {
                                            (nombre && apellidos) ? (
                                                <span>Soy {apellidos + ", " + nombre}</span>
                                            ) : (
                                                <span>Soy {nombre}</span>
                                            )
                                        }
                                    </h3>
                                </div>
                            );
                        }
                        } />

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