import React from 'react';

class ComponenteUno extends React.Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon'],
            calorias: 552
        }

        let saludo;
        if (this.props.saludo) {
            saludo = this.props.saludo;
        } else {
            saludo = "Sin saludo :("
        }

        return (
            <React.Fragment>
                <h1>Receta: {receta.nombre}</h1>
                <h2>Calorias: {receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>{ingrediente}</li>
                            );
                        })
                    }
                </ol>
                <hr/>
                <h1>Desde una prop: {saludo}</h1>
            </React.Fragment>
        );
    }
}

export default ComponenteUno;