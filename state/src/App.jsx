import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import {Dashboard} from './components/Dashboard'
import {Landing} from './components/Landing'

//Routing incoming

function App(){
    const navigate = useNavigate();
   //const router = [{
     //   route:"/",
       // componenet:Dashboard
    //}]
    return(
        <div>
            <div>
                <button onClick ={()=>{
                    navigate("/dashboard");
                }} >Dashboard</button>
                <button onClick = {()=>{
                    navigate("/landing");
                }}>Landing page</button>

            </div>
        <BrowserRouter>
        <Routes>
            <Route path = "/dashboard" element = {<Dashboard />} />
            <Route path = "/landing" element = {<Landing />} />
        </Routes>

        </BrowserRouter>
        </div>
    )
}
export default App;