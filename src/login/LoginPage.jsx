

import React from 'react'

export const LoginPage = () => {
  return (
    
    <div className="form-container">
      <div className="logo-container">
        To Do Bedu Plataform
      </div>

      <form class="form">
        <div class="form-group">
          <label for="email">Username</label>
          <input type="text" id="text" name="user" placeholder="Enter your username" required=""/>
        </div>

        <button class="form-submit-btn" type="submit">Enter</button>
      </form>


    </div>
  )
}
