import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import NavBar from '../../componentes/NavBar';
import SideBarContainer from '../../componentes/SideBarContainer';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';


const Pagos = () => {

    const [proyectos, setProyectos] = useState([]);

    const cargarPagos = async () => {
        const response = await APIInvoke.invokeGET(`/api/pagos`);
        setProyectos(response.proyectos);
    }

    useEffect(() => {
        cargarPagos();
    }, [])

    const eliminarPago = async (e, idPago) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/pagoss/${idPago}`);

        if (response.msg === 'Pago eliminado') {
            const mensaje = 'El pago fue eliminado correctamente.';
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
            cargarPagos();
        } else {
            const mensaje = 'El pago no se pudo eliminar.';
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
                    Titulo={"Pagos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Pagos"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/proyectos-crear"} type="button" className="btn btn-block btn-primary btn-sm">Crear Pago</Link></h3>
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
                                        <th style={{ width: '40%' }}>Categoria</th>
                                        <th style={{ width: '30%' }}>Fecha</th>
                                        <th style={{ width: '15%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proyectos.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.categoria}</td>
                                                    <td>{item.fecha}</td>
                                                    <td>
                                                        <Link to={`/tareas-admin/${item._id}@${item.categoria}`} className="btn btn-sm btn-info">Tareas</Link>&nbsp;&nbsp;
                                                        <Link to={`/proyectos-editar/${item._id}@${item.categoria}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                        <button onClick={(e) => eliminarPago(e, item._id)} className="btn btn-sm btn-danger">Eliminar</button>
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

export default Pagos;