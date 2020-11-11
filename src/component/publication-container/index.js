import React from 'react';
import './index.css';
import {FaCamera} from 'react-icons/fa';
import {VscDeviceCameraVideo} from 'react-icons/vsc';
import {GoCalendar} from 'react-icons/go';
import {ImNewspaper} from 'react-icons/im';
import {GoLinkExternal} from 'react-icons/go';


function PublicationContainer(){
    return(

    <div className="publication-nav">

        <div className="publishing-nav">

        <div className="publishing-child">
            <GoLinkExternal/>
            <p>Começar uma publicação</p>
        </div>

    </div>

        <div className="icon-container">
            <ul>
                <li>

                 <div className="icon1">
                    <FaCamera/>
                 </div>

                    <p>Foto</p>

                </li>

                <li>

                  <div className="icon2">
                    <VscDeviceCameraVideo/>
                  </div>

                    <p>Vídeo</p>
                </li>

                <li>

                 <div className="icon3">
                    <GoCalendar/>
                </div>

                    <p>Evento</p>
                </li>

                <li>

                  <div className="icon4">
                    <ImNewspaper/>
                  </div>

                    <p>Escrever Artigo</p>
                </li>

            </ul>

        </div>

    </div>



    )
}

export default PublicationContainer;