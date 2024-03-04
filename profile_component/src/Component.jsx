import myimage from './assets/profile1.png'

function Card(){
    return(
        <div className="card">
            <img src={myimage} />
            <h2>Rita Correia 32</h2>
        </div>
    )

}

export default Card;