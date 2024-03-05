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
            <p className="card-para">Designed in California,Assembled in INDIA</p>

        </div>
    )

}

export default Card;