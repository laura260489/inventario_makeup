import React, { Component } from 'react'
import axios from 'axios';

export default class listMarca extends Component {
    state = {
        nombre: ''
    }
    onChangeMarca = (e) => {
        this.setState({ nombre: e.target.value })
    }

    onSubmit = async (e) => {

        window.alert("Marca Guardada con éxito");

        await axios.post("http://localhost:5000/marca", {
            nombre: this.state.nombre
        });
        this.setState({ nombre: '' })


    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7 p-2">
                            <div className="card card-body">
                                <h3>Crear Nueva Marca</h3>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={this.onChangeMarca} value={this.state.nombre}></input>
                                    </div>
                                    <div class="d-grid gap-2 col-6 mx-auto p-3">
                                        <button class="btn btn-primary" id="guardar" type="submit">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
