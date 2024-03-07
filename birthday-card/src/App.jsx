import './App.css'

function App() {
  return <div>
    <BirthdayCard />
  </div>
}
function BirthdayCard(){
    return(
    <div className = "TopDiv">
        <p className="Name">Enter Your Name!</p>
        <div className="subDiv">
        <input className="Input-box" type = "text" placeholder="Enter your Name!"></input><br />
        <button className="Button">Done</button>
        </div>
    </div>
    )
}
export default App
