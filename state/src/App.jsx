import {useState} from 'react'

function App(){
    const [exchangeData,setExchangeData] = useState({});
    const [bankData,setBankData] = useState({})
    console.log("Re-render");


    useEffect(function(){
    fetch("https://google.com",async (res) =>{
        const json = await res.json();
        setBankData({income:100});
    });
    },[])
    useEffect(function(){
    setTimeout(()=>{
        setExchangeData({
            returns:100
        });
    },1000);
    }
    ,[])

    const incomeTax = (bankData.income + exchangeData) * 0.3;

    return(
        <div>
            Hi there,Your income tax returns are {incomeTax}
        </div>
    )
}

export default App;