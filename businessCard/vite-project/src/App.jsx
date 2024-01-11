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
    },
    name:{
        fontSize:'24px',
        marginBottom:'10px',
        color:'#333',
    },
    description:{
        fontSize:'10px',
        color:'#555',
        marginBottom:'5px',
    },
    sociallinks:{
        display:'flex',
        marginBottom:'15px',
    },
    link:{
        textDecoration:'none',
        color:'#fff',
        padding:'10px 15px',
        borderRadius:'5px',
        backgroundColor:'black',
        display:'inline-block',
        margin:'10px',
        marginShadow:'0 2px 4px rgba(0,0,0,0.1)',
    
    },
    intrestsHeader:{
        fontSize:'18px',
        marginBottom:'10px',
        color:'#033',
    },
    intrestList:{
        listStyle:'none',
        padding:'0',
        margin:'0',
    },
    intrestItem:{
        fontSize:'14px',
        marginBottom:'5px',
        color:'#555'
    }

}