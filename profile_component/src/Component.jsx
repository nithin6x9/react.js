import React from 'react';
import myimage from './assets/download.png'
import './index.css'

function Card(){
    return(
        <div className="card">
            <img className ="card-image" src={myimage} />
               <div className="card-subdiv">
                <strong>Apple  </strong>32
                </div>
                <p className="card-para">Steeve jobs</p> <br />
            <div className="line"></div>
            <div className="details">
                <div>
                    <p>80K</p>
                    <p>803K</p>
                    <p>1.4K</p>
                </div>
            </div>
            <div className="count">
                <div>
                    <p>Followers</p>
                    <p>Likes</p>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    )

}

export default Card;