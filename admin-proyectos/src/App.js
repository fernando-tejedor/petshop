import React ,{Fragment}from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import Asesor from './paginas/proyectos/Asesor';
import Categorias from './paginas/proyectos/Categorias';
import Clientes from './paginas/proyectos/Clientes';
import Envios from './paginas/proyectos/Envios';
import OrdenCompra from './paginas/proyectos/OrdenCompra';
import Pagos from './paginas/proyectos/Pagos';
import Productos from './paginas/proyectos/Productos';
import ProductosCrear from './paginas/proyectos/ProductosCrear';
import Transaccion from './paginas/proyectos/Transaccion';



function App() { 
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
        <Route path="/Home" exact element={<Home/>}/>
        <Route path="/Productos" exact element={<Productos/>}/>
        <Route path="/Clientes" exact element={<Clientes/>}/>
        <Route path="/Envios" exact element={<Envios/>}/>
        <Route path="/OrdenCompra" exact element={<OrdenCompra/>}/>
        <Route path="/Transaccion" exact element={<Transaccion/>}/>
        <Route path="/Pagos" exact element={<Pagos/>}/>
        <Route path="/Categorias" exact element={<Categorias/>}/>
        <Route path="/Asesor" exact element={<Asesor/>}/>
        <Route path="/productos-crear" exact element={<ProductosCrear/>}/>
        
      </Routes>
    </Router>
   </Fragment>
  );
}

export default App;
