import React from 'react'
import { Link } from 'react-router-dom';

const ContentHeader =({Titulo, breadCrumb1, breadCrumb2, ruta1})=>{
    return(
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">{Titulo}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to={ruta1}>{breadCrumb1}</Link></li>
                            <li className="breadcrumb-item active">{breadCrumb2}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentHeader;