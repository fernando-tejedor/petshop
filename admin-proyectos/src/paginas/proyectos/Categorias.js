import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import NavBar from '../../componentes/NavBar';
import SideBarContainer from '../../componentes/SideBarContainer';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';


const Categorias = () => {

    const [proyectos, setProyectos] = useState([]);

    const cargarCategorias = async () => {
        const response = await APIInvoke.invokeGET(`/api/categorias`);
        setProyectos(response.proyectos);
    }

    useEffect(() => {
        cargarCategorias();
    }, [])

    const eliminarCategoria = async (e, idCategoria) => {
        e.preventDefault();
        const response = await APIInvoke.invokeDELETE(`/api/categorias/${idCategoria}`);

        if (response.msg === 'Cliente eliminado') {
            const mensaje = 'El cliente fue eliminado correctamente.';
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
            cargarCategorias();
        } else {
            const mensaje = 'El cliente no se pudo eliminar.';
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
                    Titulo={"Categorias"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Categorias"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/proyectos-crear"} type="button" className="btn btn-block btn-primary btn-sm">Crear Categoria</Link></h3>
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
                                        <th style={{ width: '40%' }}>Nombre Categoria</th>
                                        <th style={{ width: '20%' }}>Tipo</th>
                                        <th style={{ width: '15%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proyectos.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.nombreCategoria}</td>
                                                    <td>{item.tipo}</td>
                                                    <td>
                                                        <Link to={`/tareas-admin/${item._id}@${item.nombreCategoria}`} className="btn btn-sm btn-info">Tareas</Link>&nbsp;&nbsp;
                                                        <Link to={`/proyectos-editar/${item._id}@${item.nombreCategoria}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                        <button onClick={(e) => eliminarCategoria(e, item._id)} className="btn btn-sm btn-danger">Eliminar</button>
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

export default Categorias;