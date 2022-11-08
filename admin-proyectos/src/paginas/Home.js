import React from 'react'
import NavBar from '../componentes/NavBar';
import SideBarContainer from '../componentes/SideBarContainer';
import ContentHeader from '../componentes/ContentHeader';
import { Link } from 'react-router-dom';
import Footer from '../componentes/Footer';

const Home = () => {
    return (
        <div className='wrapper'>
            <NavBar>
            </NavBar>
            <SideBarContainer>
            </SideBarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    Titulo={"Dashboard"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Productos</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/Productos"} className="small-box-footer">Ver Productos <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Clientes</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/Clientes"} className="small-box-footer">Ver Clientes <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Envios</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/Envios"} className="small-box-footer">Ver Envios <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Ord. de Compra</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/OrdenCompra"} className="small-box-footer">Ver Ord. de Compra <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Transaccion</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/Transaccion"} className="small-box-footer">Ver Transaccion <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Pagos</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/Pagos"} className="small-box-footer">Ver Pagos <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Categorias</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/Categorias"} className="small-box-footer">Ver Categorias <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Asesor</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-clipboard-check" />
                                    </div>
                                    <Link to={"/Asesor"} className="small-box-footer">Ver Asesor <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
            <Footer>
            </Footer>
        </div>
    )
}

export default Home;