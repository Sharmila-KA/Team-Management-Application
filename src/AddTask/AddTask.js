import './AddTask.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function AddTask() {
  return(
    <form id="myform">
        <h3>Add Task</h3>
      <div class="mb-3">
        <label class="form-label">username</label>
        <input type="text" class="form-control" id="username" placeholder='UserName'></input> 
      </div>
      <div class="mb-3">
        <label class="form-label">Task Details</label>
        <input type="text" class="form-control" id="taskdetails" placeholder='Task-Name'></input>  
      </div>
      <button type="submit" class="btn btn-primary">Add Task</button>
    </form>
    
    );
}

export default AddTask;
