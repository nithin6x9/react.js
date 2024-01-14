function App(){
    return(
        <div>
        <header title = "Hey i'm Nithin" />
        <header title = "hey i'm not Nithin" />
        </div>
    )

}

function header({title}){
    return <div>
        {title}
    </div>
}

export default App