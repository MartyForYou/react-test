import React, {Component} from 'react';

class SeccionPruebas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contador: 0
        };
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        })
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        })
    }
    
    loadArticles(nombre, index) {
        return (<span>{nombre + " con indice: " + index}</span>)
    }

    render() {
        let recetas = ["Pizza", "Guiso", "Fideos"]

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                <h2 className="funciones">Funciones y JSX</h2>
                {
                    recetas.map((receta, i) => {
                        return (
                            <p key={i}>{this.loadArticles(receta, i)}</p>
                        );
                    })
                }
                <h2 className="estados">Estados</h2>
                <p>{this.state.contador}</p>
                <input type="button" value="Sumar" onClick={this.sumar}/>
                <input type="button" value="Restar"onClick={this.restar}/>
            </section>
        )
    }
}

export default SeccionPruebas;