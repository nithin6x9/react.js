export function BusinessCard(props){
    return(
        <div style="{styles.card}">
            <h2 style="{styles.name}"></h2>
            <p style="{styles.description}"></p>
            <h3 style="{styles.intrestsHeader">Intrests</h3>
            <ul styles="{styles.intresList">
                {props.intrests.map((intrest)=>{
                    <li key = {intrest} style = {style.intrestItems}>
                        {intrest}
                    </li>
                })}
            </ul>
            <div style = "{styles.socialLinks}">
                <a href = {props.linkedin} target = "_blank" rel = "noopener noreferrer" style={{...styles.link,marginLeft:'0px'}}>linkedin</a>
                <br />
                <a href = {props.twitter} target = "_blank" rel= "noopener noreferrer" styles = {styles.link}>Twitter</a>
            {props.othersocialmedia &&(
            <a href={props.othersocialmedia} target ="_blank" rel="noopener noreferrer" style = {styles.link}>
                {props.othersocialmedia.label}
            </a>
            )}
            </div>
        </div>
    )
}

const styles = {
    card:{
        border:'1px solid #ddd',
        borderRadius:'8px',
        padding:'20px',
        margin:'20px',
        maxWidth:'400px',
        boxShodow:'0 4px 8px rgba(0,0,0,0.01)',
        backgroundColor: 'f8f9fa'
    }
    
}