import './LoginUi.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function LoginUi() {
  return(
      <form id ="myform">
        <h3>Login</h3>
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">username</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your UserName'></input>
                  <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
              </div>
              <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your PassWord'></input>
              </div>
              <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                  <label class="form-check-label" for="exampleCheck1">Sign In As Team Member</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              
          </form>
    
    );
}

export default LoginUi;
