import React from 'react'
import { Link } from 'react-router-dom'
//import SignUpPage from './sign-up'

const StartPage: React.FunctionComponent= () => {
  return (
    <div className="container">
      <h1>See what's happening in the world right now</h1>
      <button type="button">
        <Link to="/sign-up">
        Create account
        </Link>
      </button>
      <h6>
        Have an account already?
        <Link to="/login">
          Log in
        </Link>
      </h6>
    </div>
  )

}


export default StartPage