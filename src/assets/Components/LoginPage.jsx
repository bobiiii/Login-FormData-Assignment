import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StateContext } from '../../App'


function LoginPage() {

  //State Variables
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  //Context
  const {formData, setFormData} = useContext(StateContext)

  //Navigate hook to variable
  const navigate = useNavigate()

  //Handler Functions

  function handleSubmit(e) {

    e.preventDefault()
    setFormData([...formData,{Email, Password}])
    navigate("/loginDataUi")

  }


  return (
    <div className='container-fluid login-cont-cus d-flex justify-content-center align-items-center'>
      <div className='container rounded-2 p-3  w-50  form-custom'>
        <form  >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label w-100  text-center ">Email address</label>
            <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text w-100  text-center">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label w-100  text-center">Password</label>
            <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check d-flex justify-content-center">
            <input type="checkbox" className="form-check-input mx-1" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100 ">Submit</button>

        </form>

      </div>
    </div>
  )
}

export default LoginPage