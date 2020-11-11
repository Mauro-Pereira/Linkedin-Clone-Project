import React from 'react';
import './index.css';
import img3 from '../../image/img3.jpg';

import {AiOutlineLike,AiOutlineSend} from 'react-icons/ai';
import {RiMessage2Fill,RiShareForwardLine} from 'react-icons/ri';


function Feed(){
    return(

        <div className="feed-container">

            <div className="circle-img">

                <div className="profile">
                    <img className="img1" src={img3}/>
                    <div className="profile-info">
                        <h3>Luciano Viana</h3>
                        <h6>Start Corporation</h6>
                        <h6>21 h . Editado</h6>
                    </div>
                </div>
                <div className="point">
                    <p className="points">...</p>
                </div>
            </div>

            <div className="feed-content">

            </div>

            <div className="feed-icon-list">

                <ul>
                    <li>
                        <AiOutlineLike/>
                        <p>Like</p>
                    </li>

                    <li>
                        <RiMessage2Fill/>
                        <p>Comentar</p>
                    </li>

                    <li>
                        <RiShareForwardLine/>
                        <p>Compartilhar</p>
                    </li>

                    <li>
                        <AiOutlineSend/>
                        <p>Enviar</p>
                    </li>
                </ul>

            </div>
        </div>

    )
}

export default Feed;