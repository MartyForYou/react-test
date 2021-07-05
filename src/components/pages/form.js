import React, { Component } from 'react';
import Sidebar from '../sidebar';

class Form extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    genHombreRef = React.createRef();
    genMujerRef = React.createRef();
    genOtroRef = React.createRef();

    state = {
        user: {}
    }

    recibirFormulario = (event) => {
        event.preventDefault();

        let genero = "hombre";

        if (this.genHombreRef.current.checked) {
            genero = this.genHombreRef.current.value;
        } else if (this.genMujerRef.current.checked) {
            genero = this.genMujerRef.current.value;
        } else {
            genero = this.genOtroRef.current.value;
        }

        let user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        });

        console.log("Formulario enviado");
    };

    render() {
        let user = null;
        if (this.state.user.nombre) {
            user = this.state.user;
        }

        return (
            <div id="form">
                <div className="center">
                    <div id="content">
                        <h1 className="subHeader">Formulario</h1>

                        {/* Mostrar datos */}
                        {user &&
                            <div id="userData">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                {user.apellidos && <p>Apellidos: <strong>{user.apellidos}</strong></p>}
                                {user.bio && <p>Biografia: <strong>{user.bio}</strong></p>}
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }

                        {/* Formulario */}
                        <form className="mid-form"
                            onSubmit={this.recibirFormulario}
                            onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.genHombreRef} defaultChecked /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.genMujerRef} /> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.genOtroRef} /> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>
                    </div>

                    <Sidebar />
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

export default Form;