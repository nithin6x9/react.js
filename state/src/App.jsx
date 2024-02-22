import {BrowserRouter,Routes} from 'react-router-dom'

//Routing incoming

function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path = "/dashboard" element = {<Dashboard />} />
        </Routes>

        </BrowserRouter>
    )
}
export default App;