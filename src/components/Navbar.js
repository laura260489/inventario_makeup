import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">

                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            
                            MakeupInventario
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/crear">Guardar Producto</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/marca">Crear Marca</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}
