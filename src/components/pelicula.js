import React, { Component } from 'react';

class Pelicula extends Component {
    marcar = () => {
        const pelicula = this.props.pelicula;
        const indice = this.props.indice;
        this.props.marcarFavorita(pelicula, indice);
    }

    render() {
        const { titulo, image } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="/#">Leer más</a>
                <button onClick={this.marcar}>Marcar como favorita</button>

                <div className="clearfix"></div>
            </article>
        )
    }
}

export default Pelicula;