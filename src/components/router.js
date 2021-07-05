import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Rutas
import Peliculas from './peliculas';
import SeccionPruebas from './seccionPruebas';
import Error from './error';
import ComponenteUno from './componenteUno';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* Rutas */}
                <Switch>
                    <Route exact path="/" component={Peliculas} />
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
            </BrowserRouter>
        );
    }
}

export default Router;