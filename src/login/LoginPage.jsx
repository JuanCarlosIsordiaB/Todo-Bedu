

import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    
    <div className="form-container">
      <div className="logo-container">
        To Do Bedu Plataform
      </div>

      <form className="form">
        <div className="form-group">
          <label for="email">Username</label>
          <input type="text" id="text" name="user" placeholder="Enter your username" required=""/>
        </div>

        <Link className="form-submit-btn" type="submit" to='/todo'>Register</Link>
      </form>


    </div>
  )
}
