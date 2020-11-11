import React from 'react';
import './index.css';
import {
    FaLinkedin,
    FaSearch,
    FaHome,
    FaUserFriends,
    FaBell,
    FaTh
} from 'react-icons/fa';

import {RiHandbagFill, RiMessage2Fill,RiNotificationBadgeFill} from 'react-icons/ri';
import {IoMdArrowDropdown} from 'react-icons/io';
import profile from '../../image/img2.jpg';


function Header(){
    return(

        <header className="nav-header">

            <div className="nav-input">

                <div className="linkedin-icon-container">
                    <FaLinkedin className="linkedin-icon"/>
                </div>

                 <div className="icon-container-header">
                    <FaSearch className="input-icon"/>
                    <input className="input-text" type="text" placeholder="Pesquisar"/>
                </div>

            </div>

            <div className="nav-link">
                <ul>
                    <li>
                        <div>
                            <FaHome/>
                            <p>Home</p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <FaUserFriends/>
                            <p>Minha Rede</p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <RiHandbagFill/>
                            <p>Vagas</p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <RiMessage2Fill/>
                            <p>Mensagens</p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <FaBell/>
                            <p>Notificações</p>
                        </div>
                    </li>


                </ul>

            </div>

            
            <div className="profile-header">        
                
                <img className="profile-image-header" src={profile} alt="profile header"/>

                <div className="info-container">
                    <p>Eu</p>
                    <IoMdArrowDropdown/>
                </div>
                        
            </div>

            <div className="solution-ad">

                <ul>
                    <li>
                        <div className="solution-ad-container">
                            <FaTh/>
                            <div className="info-container">
                                <p>Soluções</p>
                                <IoMdArrowDropdown/>
                             </div>
                        </div>
                    </li>

                    <li>
                        <div className="solution-ad-container">
                            <RiNotificationBadgeFill/>
                            <p>Anuncie uma Vaga</p>
                         </div>
                    </li>
                </ul>

            </div>

        </header>

    )
}

export default Header;