import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import NavBar from '../../componentes/NavBar';
import SideBarContainer from '../../componentes/SideBarContainer';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';


const Transaccion = () => {

    const [proyectos, setProyectos] = useState([]);

    const cargarTransaccion = async () => {
        const response = await APIInvoke.invokeGET(`/api/transaccion`);
        setProyectos(response.proyectos);
    }

    useEffect(() => {
        cargarTransaccion();
    }, [])

    const eliminarTransaccion = async (e, idTransaccion) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/transaccion/${idTransaccion}`);

        if (response.msg === 'Transaccion eliminada') {
            const mensaje = 'La Transaccion fue eliminada correctamente.';
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
            cargarTransaccion();
        } else {
            const mensaje = 'La Transaccion no se pudo eliminar.';
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
                    Titulo={"Transaccion"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Transaccion"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/proyectos-crear"} type="button" className="btn btn-block btn-primary btn-sm">Crear Transaccion</Link></h3>
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
                                        <th style={{ width: '15%' }}>Id</th>
                                        <th style={{ width: '25%' }}>Cliente</th>
                                        <th style={{ width: '25%' }}>Orden de Compra</th>
                                        <th style={{ width: '15%' }}>Pago</th>
                                        <th style={{ width: '25%' }}>Producto</th>
                                        <th style={{ width: '15%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proyectos.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.cliente}</td>
                                                    <td>{item.ordenCompra}</td>
                                                    <td>{item.pago}</td>
                                                    <td>{item.producto}</td>
                                                    <td>
                                                        <Link to={`/tareas-admin/${item._id}@${item.cliente}`} className="btn btn-sm btn-info">Tareas</Link>&nbsp;&nbsp;
                                                        <Link to={`/proyectos-editar/${item._id}@${item.cliente}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                        <button onClick={(e) => eliminarTransaccion(e, item._id)} className="btn btn-sm btn-danger">Eliminar</button>
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

export default Transaccion;