import React from "react";
import Address from './Address';
import './User2.css';

class User extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name : 'Pankaj',
            city : 'Mumbai',
            email : 'Pankaj@gmail.com',
            country: 'India'
        }
    }
    

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                  <h2>User Details</h2>
              </div>
              <div className="card-body">
                  <p>Name:{this.state.name}</p>
                  <p>Email: {this.state.email}</p>
              </div>
              <div className="card-footer">
                  <Address city = {this.state.city} country = {this.state.country}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
