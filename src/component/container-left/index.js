import React from 'react';
import './index.css';
import { FaRegBookmark } from "react-icons/fa";
import img2 from '../../image/img2.jpg';

function ContainerLeft(){
    return(

        <div className="container-left">

                 <div className="profile-container">
                     <div className="top">

                         <div className="banner">
                            <img className="img2" src={img2} alt="profile"/>
                         </div>

                        <div className="presentation-container">
                            <h5>Claúdia Amorim</h5>
                            <h6>Web and Mobile Full Stack.</h6>
                         </div>

                     </div>

                     <div className="center">

                         <div className="profile-content">
                             <div className="content-1">

                                 <ul className="contents-list">
                                     <li className="list">Quem viu seu perfil <p className="number">200</p></li>
                                 </ul>

                             </div>

                             <div className="content-2">

                                 <ul className="contents-list">
                                     <li className="list">Viram sua publição <p className="number">195</p></li>
                                 </ul>

                             </div>
                         </div>

                         
                     <div className="premium-content">
                             <p className="exclusive-feature">Acesse ferramentas exclusivas</p>
                             <h4 className="premium-text">Experimente premium grátis por 1 mês</h4>
                     </div>

                </div>

                     

                     <div className="bottom">

                         <ul>
                             <li className="icon"><FaRegBookmark/></li>
                             <li>Meus Itens</li>
                         </ul>


                     </div>

                 </div>

                <div className="hashtag-container">

                    
                        <ul className="hashtag-list">
                             <li># Vagas</li>
                             <li># Empreendedorismo</li>
                             <li># Inovação</li>
                             <li># Oportunidade</li>
                             <li># Tecnologia</li>
                             <li># Confiança</li>
                        </ul>

                </div>

            </div>

    )
}

export default ContainerLeft;