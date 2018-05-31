import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var tasks = [
  // {"name": "shopping-milk", "desc":"Get milk","done":false, "removed": false},
  // {"name": "cleening", "desc":"Clean room","done":false, "removed": false},
  {"name": "shopping-storage", "desc":"Get storage unit","done":false, "removed": false},
  {"name": "data-analysis", "desc":"Analysis data","done":false, "removed": false},
  {"name": "data-sort", "desc":"Sorting data","done":false, "removed": false},
  {"name": "data-plot", "desc":"Plot data","done":false, "removed": false},
  {"name": "family-daycare", "desc":"Kid to daycare","done":false, "removed": false},
  {"name": "dinner", "desc":"Prepare Dinner for 3","done":false, "removed": false},
  {"name": "shopping-shoes", "desc":"Buy shoes for XXX","done":false, "removed": false},
  {"name": "crdeits", "desc":"Clear up credits","done":false, "removed": false},
  {"name": "dental", "desc":"Dental appiontment","done":false, "removed": false},
  {"name": "gardening", "desc":"Gardening and garbage collection","done":false, "removed": false},
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">To Do List Tasks</h1>
        </header>
        <Task />
      </div>
    );
  }
}

class TaskList extends Component {
  // Update task is done or not
  updateStatus(key) {
    tasks.map((item) => {
      if (item.name === key) {
        if (item.done) {
          item.done = false
        } else {
          item.done = true;
        }
      }
      return null;
    }); 
   this.forceUpdate()
  }

  // Remove a task
  removeTask(key) {
    alert("Test for call remove "+key);
  }
  render () {
    var _this = this;
    var counter = 0;
    return (
      tasks.map(function(task){
        if(!task.removed) {
          return (
            <tr className="" key={task.name}>
              <td>{++counter}</td>
              <td><span className="task-title">{task.name}</span></td> 
              <td><span className="">{task.desc}</span></td>
              <td> 
                <span className={`task-status ${task.done ? "status-done" : "status-not-done"} `} key={task.name} 
                  onClick={() =>  _this.updateStatus(task.name)}>
                  {task.done ? "Done!" : "Pending"}
                </span>
              </td>
              <td> <button className="btn btn-danger" key={task.name} onClick={() =>  _this.removeTask(task.name)}>Remove</button></td>
            </tr>
          )
        }
        return null;
      })
    );
  }
}


class Task extends Component {
  
  constructor(props) {
    super(props);
    this.state = {"name": "", "desc":"","done":false, "removed": false};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    tasks.push(this.state);
    this.forceUpdate();
    event.preventDefault();
  }
  render () {
    return (
      <div>
        <table className="table task-table">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Description</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        <TaskList />
        </tbody>
      </table>
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="task-name" className="sr-only">Task name</label>
          <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Task name" onChange={this.handleInputChange} />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="task-desc" className="sr-only">Task description</label>
          <input type="text" className="form-control" name="desc" value={this.state.desc} placeholder="Task description" onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
      </div>
    )
  }
}



export default App;
