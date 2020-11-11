import React from 'react';
import './index.css';

function Divider(){
    return(
        <div className="main-container">
            <hr className="divider"/>
            <div className="container-para">
                 <p className="classifier">Classificar por:</p>
                 <p className="principal-para">Principal</p>
            </div>
        </div>
    )
}

export default Divider;