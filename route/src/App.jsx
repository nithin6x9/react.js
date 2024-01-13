import {BrowserRouter,Routes,Route} from 'react-route-dom'
import './App.css'


function App(){
    return(
        <Routes>
            <Route path = "/dashboard" element = {<dashboard />}/>
            <Route path = "/" element = {<Landing />}
        </Routes>
    )
}