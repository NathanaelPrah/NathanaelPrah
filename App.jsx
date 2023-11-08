import { useState } from 'react'
import './App.css'

function NavBar() {
  return (
    <div className="nav">
      <div className='nav-container'>
        <div className='nav-left'>
          SAGE
        </div>

        <div className="nav-right">
          <a href="">Contact</a>
          <a href="">About Us</a>
        </div>
      </div>
    </div>
  )
}
function Footer() {
  return (
    <div className="footer">
      <div className="f1">SAGE SAY'S GOOD BYE</div>
    </div>
  )
}
function Form() {
  return (
    <div className="Form">
      <form>
        <p><b>Sign Up</b><br />please fill in this form to create an account!</p>

        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"></input><br /><br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input><br /><br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"></input><br /><br />
        <label for="password">confirm Password:</label>
        <input type="password" id="password" name="password"></input>

        <div className="button">
          <button>submit</button>
        </div>
      </form>
    </div>
  )
}


function App() {
  return (
    <><NavBar /><Footer /><Form /></>
  );
}

export default App
