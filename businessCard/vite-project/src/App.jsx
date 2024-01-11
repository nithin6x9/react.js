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
            
        </div>
    )
}