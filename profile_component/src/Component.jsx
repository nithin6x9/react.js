import React from 'react';
import myimage from './assets/download.png'
import './index.css'

function Card(){
    return(
        <div className="card">
            <img className ="card-image" src={myimage} />
               <div className="card-subdiv">
                <strong>Steeve Jobs </strong>69
                </div>
                <p className="card-para">Apple Inc.</p> <br />
            <div className="line"></div>
         
            <div class="stat-section">
      <div class="stats">
        <span class="amount">
          80K
        </span>
        <span class="amount-name">
          Followers
        </span>
      </div>
      <div class="stats">
        <span class="amount">
          803K
        </span>
        <span class="amount-name">
          Likes
        </span>
      </div>
      <div class="stats">
        <span class="amount">
          1.4K
        </span>
        <span class="amount-name">
          Photos
        </span>
      </div>
    </div>
 
        </div>
    )

}

export default Card;