import React, { Component } from 'react'
import axios from 'axios';

export default class createProducto extends Component {

    state={
        marcas:[],
        marcaSelected:'',
        nombre:'',
        especificaciones:'',
        ubicacion:''
    }

    onChangeInput=(e)=>{

        this.setState({
            [e.target.name]:e.target.value
        })

    }

    onSubmit = async(e) => {
        const newProducto={
            nombre:this.state.nombre,
            especificaciones:this.state.especificaciones,
            marca:this.state.marcaSelected,
            ubicacion:this.state.ubicacion
        }

        await axios.post('http://localhost:5000/producto',newProducto)

        window.location.href='/';
    }


    async componentDidMount(){
        const res=await axios.get('http://localhost:5000/marca')

        this.setState({
            marcas:res.data.map(marca=>marca.nombre),
            marcaSelected:res.data[0].nombre
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7 p-2">
                            <div className="card card-body">
                                <h3>Crear Nuevo Producto</h3>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="nombre" laceholder="Nombre" value={this.state.nombre} onChange={this.onChangeInput}></input>
                                        <br></br>

                                        <input type="text" className="form-control" name="especificaciones" placeholder="Especificaciones" value={this.state.especificaciones} onChange={this.onChangeInput}></input>
                                        <br></br>

                                        <select className="form-control" name="marcaSelected" value={this.state.marcaSelected} onChange={this.onChangeInput}>
                                            {
                                                this.state.marcas.map(marca =>
                                                    <option key={marca} value={marca}>
                                                        {marca}
                                                    </option>)
                                            }
                                        </select>

                                        <br></br>

                                        <input type="text" className="form-control" name="ubicacion" placeholder="Ubicacion" value={this.state.ubicacion} onChange={this.onChangeInput}></input>
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
