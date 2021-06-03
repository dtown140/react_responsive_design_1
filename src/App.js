import React, {useState, LinkHTMLAttributes} from 'react'
import desktop from "./images/bg-intro-desktop.png"
import mobile from "./images/bg-intro-mobile.png"

import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    email:"",
    password:"",
  });

  const handleFirstNameinputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameinputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmailinputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handlePasswordinputChange = (event) => {
    setValues({...values, password: event.target.value})
  }


  return (
    <>
      
      <header>

      </header>

      <main>
        
        <div className ="description">
        <h1><strong>Learn to code by <br></br> 
                watching others</strong></h1>

            <p>See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great but understanding how 
            developers think is invaluable.
            </p>
        </div>
       
       <div className = "form-container">
         <button className = "blue-trial"><strong>Try it free 7 days</strong> then $20/mo. thereafter</button>
         <div className="form">
          <form className = "register-form">
              <input
                onChange={handleFirstNameinputChange}
                value={values.firstName}
                className="form-field"
                placeholder="First Name"
                name="firstName"/>
              <input 
                onChange={handleLastNameinputChange}
                value={values.lastName}
                className="form-field"
                placeholder="Last Name"
                name="lastName"/>    
              <input 
                onChange={handleEmailinputChange}
                value={values.email}
                className="form-field"
                placeholder="Email"
                name="email"/>
              <input 
                onChange={handlePasswordinputChange}
                value={values.password}
                className="form-field"
                placeholder="Password"
                name="password"/>

              <button className ="green-trial">CLAIM YOUR FREE TRIAL</button>
              
             
              <p class="subscript"><sub>By clicking the button you are agreeing to our <strong className="terms">Terms and Services</strong></sub></p>

          </form>
         </div> 
       </div>

      </main>
    </>
  );
}

export default App;
