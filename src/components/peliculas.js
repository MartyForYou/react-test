import React, { Component } from 'react';
import Pelicula from './pelicula';

class Peliculas extends Component {
    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://www.filmandtvnow.com/wp-content/uploads/2016/01/Batman-vs-Superman-1-1-e1453672237797.jpg' },
            { titulo: 'Rapidos y Furiosos 9', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRq6_4OeNfendbg5EM1mL-CcwQnREi8vDozw4ESryy4gdJ9jqFm' },
            { titulo: 'Iron Man 3', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCRz1NYfT5gGPN8_Vgm1w8hXQua_w-ybGz-yP8iqbD_i-zE6DP' }
        ],
        nombre: "Martin Navarro",
        favorita: {}
    }

    cambiarTitulo = () => {
        let { peliculas } = this.state;
        peliculas[0].titulo = "Batman begins";
        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        console.log("Favorita marcada, indice: " + indice);
        this.setState({
            favorita: pelicula
        })
    }

    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                <p><input type="button" value="Cambiar titulo" onClick={this.cambiarTitulo}/></p>
                {this.state.favorita.titulo ? (
                        <p className="favorita">
                            <strong>La pelicula favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                        <p><strong>No hay pelicula favorita seleccionada</strong></p>
                    )
                }      
                {/* Listado de peliculas */}
                <div id="articles">
                {
                    this.state.peliculas.map((pelicula, i) => {
                        return (
                            <Pelicula 
                                key={i} 
                                pelicula={pelicula}
                                indice={i}
                                marcarFavorita={this.favorita}
                            />
                        )
                    })
                }
                </div>
                
            </div>
        )
    }
}

export default Peliculas;