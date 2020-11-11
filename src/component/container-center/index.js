import React from 'react';
import './index.css';
import Publication from '../publication-container/index';
import Divider from '../divider/index';
import Feed from '../feed/index';


function ContainerCenter(){
    return(
        <div className="container-center">

            <Publication/>
            <Divider/>
            <Feed/>
            <Feed/>
            <Feed/>
        
        </div>
        
    )
}

export default ContainerCenter;