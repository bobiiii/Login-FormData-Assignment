import React,{useContext} from 'react'
import {StateContext} from "../../App"

function LoginDataUi(props) {
  //uusing Context from App Comp
  const context = useContext(StateContext)
  const data = context.formData
  
  return (
    <div className='container  '>
      <div className='container-fluid login-cont-cus d-flex justify-content-center align-items-center '>
    
    {data[0] ? data.map((details, index)=>{
      
      return(
        <div key={index}> 
          <h3> Attemp No: {index+1}</h3>
          <hr/>
        <h5>Email:  {details.Email}</h5>
        <h5>Password:  {details.Password}</h5>
        <br/>
        </div>
      )
    }):<h1>No data Found</h1>} 
    </div>
    </div>
    )
}

export default LoginDataUi