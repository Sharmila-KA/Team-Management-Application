import './UserDetails.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function UserDetails() {
  return(
    <form id="myform">
        <h3>Add User</h3>
      <div class="mb-3">
        <label class="form-label">username</label>
        <input type="text" class="form-control" id="username" placeholder='UserName'></input>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'></input>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'></input>
      </div>
      <div class="mb-3">
        <label  class="form-label">Phone Number</label>
        <input type="text" class="form-control" id="phonenumber" placeholder='MobileNumber'></input>
      </div>
      
      <button type="submit" class="btn btn-primary">Add User</button>
    </form>
    
    );
}

export default UserDetails;
