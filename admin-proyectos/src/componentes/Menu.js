import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        < nav className="mt-2" >
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Inicio
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Productos"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Productos
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Clientes"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Clientes
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Envios"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Envios
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/OrdenCompra"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Orden de Compra
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Transaccion"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Transaccion
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Pagos"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Pagos
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Categorias"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Categorias
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Asesor"} className="nav-link">
                        <i className="nav-icon fas fa-clipboard-check" />
                        <p>
                            Asesor
                        </p>
                    </Link>
                </li>
            </ul>
        </nav >
     );
}
 
export default Menu;
