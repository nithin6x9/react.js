import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Dashboard} from './components/Dashboard'
import {Landing} from './components/Landing'

//Routing incoming

function App(){
   //const router = [{
     //   route:"/",
       // componenet:Dashboard
    //}]
    return(
        <div>
            <div style = {{background:"black"}}>

                Topbar pari

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