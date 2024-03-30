
const axios = require("axios");


/*
async function App(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    const response = await axios.POST
    console.get(response.data.todos.length)
}
function App() {
    fetch("https://sum-server.100xdevs.com/todos").then(async(response)=>{
        const json = await response.json();
        console.log(json.todos.length);
    })
}

async function App(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos.length);
}
*/

async function App(){
    const response = await axios.post("https://httpdump.app/dumps/f25b542b-573a-41b1-be22-59bda189587b",{
        usernmae:"Nithin Krishna",
        password:"FuckerTony123"
    },
    {
        headers:{
            Authorization:"Bearer 123",
        },
    },);
    console.log(response.data);
}

export default App
