import './App.css'

function App() {
  return <div>
    <BirthdayCard />
  </div>
}
function BirthdayCard(){
    return(
    <div className = "TopDiv">
        <p className="Name">Enter Your Name!</p><br/><br />
        <div>

        <input className="Input-box" type = "text" placeholder="Enter your Name!"  />
        </div>
    </div>
    )
}
export default App
