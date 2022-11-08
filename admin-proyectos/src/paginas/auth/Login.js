import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;
    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
        useEffect(() => {
            document.getElementById('email').focus();
        }, [])

        const iniciarSesion = async () => {

            const data = {
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
            const mensaje = response.msg;
            if (mensaje === 'El usuario no existe'|| mensaje === 'contrase;a incorrecta') {
                navigate('');
                const mensaje = 'No fue posible iniciar sesion.';
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
            }else{
                const jwt = response.token;
                localStorage.setItem ('token',jwt);
                navigate ('/Home');
            }

        }

        const onSubmit = (e) => {
            e.prevenDefaul();
            iniciarSesion();
        }
    


    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Iniciar</b> Sesion</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bienvenido, ingrese sus credenciales.</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>

                            <div className="social-auth-links text-center mb-3">
                                <button type='submit' className="btn btn-block btn-primary">
                                    Ingresar
                                </button>
                                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                                    Crear Cuenta
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;