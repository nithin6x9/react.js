import {Suspence,lazy} from 'react'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
const Dashboard =lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

//Routing incoming

function App(){
        return(
        <div>
            <BrowserRouter>
                <Appbar />
                <Routes>
                    <Route path = "/dashboard" element = {<Suspence fallback={"loading..."}><Dashboard /> </Suspence>} />
                    <Route path = "/landing" element = {<Suspence fallback={"loading..."}><Landing /> </Suspence>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
function Appbar(){
    
    const navigate = useNavigate();
            return <div>
            <div>
                <button onClick ={()=>{
                    navigate("/dashboard");
                }} >Dashboard</button>
                <button onClick = {()=>{
                    navigate("/landing");
                }}>Landing page</button>
                </div>
            </div>

}
export default App;

//Lazy Loading