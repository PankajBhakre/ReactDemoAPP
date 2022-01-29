import React, { Component } from "react";
import { userData } from "./../../UserData.js";
 import {emp} from './../../Emp.js';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: userData,
    };
  }

  displayUserInformation = () => {
    this.setState({
      info: userData,
    });
    console.log(this.state.info.results);
  };

  displayEmpInformation = () =>{
    this.setState({
      info:emp
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-3 bg-dark text-white">
            <h1>User Data</h1>
          </div>
        </div>
        <div className="row mt-5 p-3">
          <div className="col-6">
            <button
              className="btn btn-primary"
              onClick={this.displayUserInformation}
            >
              User Information
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary" onClick={this.displayEmpInformation}>Employee Information</button>
          </div>
        </div>
        <div className="row mt-5 p3">
          <div className="col">
            <table className="table table-hover">
              <thead className="bg-light text-dark">
                <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>EMAIL</th>
                  <th>CITY</th>
                </tr>
              </thead>
              <tbody>
                {this.state.info.results.map(function (element) {
                  return (
                    <tr>
                      <td>
                        {
                          <img
                            src={element.picture.medium}
                            className="img-fluid" alt="userPicture"
                          ></img>
                        }
                      </td>
                      <td>
                        {element.name.first} {element.name.last}
                      </td>
                      <td>
                        {element.gender}
                      </td>
                      <td>
                        {
                          element.email
                        }
                      </td>
                      <td>
                        {element.location.city}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
