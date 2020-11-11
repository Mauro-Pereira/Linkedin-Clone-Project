import React from 'react';
import './main.css';
import ContainerCenter from '../component/container-center/index';
import ContainerLeft from '../component/container-left/index';
import ContainerRight from '../component/container-right/index';
import Header from '../component/header/index';



function Main(){
    return(

    <div className="container">
        <Header/>
        <div className="principal">
            <ContainerLeft/>
            <ContainerCenter/>
            <ContainerRight/>
            
        </div>
    </div>
        
    )
}

export default Main;