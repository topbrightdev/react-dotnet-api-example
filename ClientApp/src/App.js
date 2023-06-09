import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import CreateUser from './components/CreateUser'
import { DisplayBoard } from './components/DisplayBoard'
import { getAllUsers, createUser } from './services/UserService'

class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0, 
    edit_user: {}, 
  }

  editUser = (id) => {
    getAllUsers()
      .then(users => {
        console.log(users[id])
        this.setState({edit_user: users[id]})
      });
  }

  createUser = (e) => {
    createUser(this.state.user)
      .then(response => {
        console.log(response);
        this.setState({numberOfUsers: this.state.numberOfUsers + 1})
    });
  } 

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
    let user = this.state.user
    if (e.target.name === 'firstname') {
        user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
        user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
        user.email = e.target.value;
    }
    this.setState({user})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser
                  onChangeForm={this.onChangeForm}
                  onUpdate={this.getAllUsers}
                  onCreate={this.getAllUsers}
                  createUser={this.createUser}
                  editUser = {this.state.edit_user}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}
          edit_user = {this.editUser}
          ></Users>
        </div>
      </div>
    );
  }
}

export default App;