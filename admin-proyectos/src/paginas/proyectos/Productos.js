import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import NavBar from '../../componentes/NavBar';
import SideBarContainer from '../../componentes/SideBarContainer';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';


const Productos = () => {

    const [proyectos, setProyectos] = useState([]);

    const cargarProducto = async () => {
        const response = await APIInvoke.invokeGET(`/api/productos`);
        setProyectos(response.proyectos);
    }

    useEffect(() => {
        cargarProducto();
    }, [])

    const eliminarProducto = async (e, idProducto) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`);

        if (response.msg === 'Producto eliminado') {
            const mensaje = 'El producto fue eliminado correctamente.';
            swal({
                title: 'Información',
                text: mensaje,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
            cargarProducto();
        } else {
            const mensaje = 'El producto no se pudo eliminar.';
            swal({
                title: 'Error',
                text: mensaje,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }
    }

    return (
        <div className="wrapper">
            <NavBar></NavBar>
            <SideBarContainer></SideBarContainer>

            <div className="content-wrapper">

                <ContentHeader
                    Titulo={"Productos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Productos"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/productos-crear"} type="button" className="btn btn-block btn-primary btn-sm">Crear Producto</Link></h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>Id</th>
                                        <th style={{ width: '40%' }}>Nombre</th>
                                        <th style={{ width: '12%' }}>Precio Compra</th>
                                        <th style={{ width: '10%' }}>Precio Venta</th>
                                        <th style={{ width: '10%' }}>Categoria</th>
                                        <th style={{ width: '30%' }}>Descripcion</th>
                                        <th style={{ width: '10%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proyectos.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.precioCompra}</td>
                                                    <td>{item.precioVenta}</td>
                                                    <td>{item.categoria}</td>
                                                    <td>{item.descripcion}</td>
                                                    <td>
                                                        <Link to={`/tareas-admin/${item._id}@${item.nombre}`} className="btn btn-sm btn-info">Tareas</Link>&nbsp;&nbsp;
                                                        <Link to={`/proyectos-editar/${item._id}@${item.nombre}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                        <button onClick={(e) => eliminarProducto(e, item._id)} className="btn btn-sm btn-danger">Eliminar</button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Productos;