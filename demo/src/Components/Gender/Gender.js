import React, { Component } from "react";
import { userData } from "./../../UserData.js";

class Gender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: userData,
    };
  }

  allUsers = () => {
      this.setState({
          info: this.state.info.results
      })
  }
  maleUsers = () => {
    console.log(this.state.info.results.filter(x=>x.gender === 'male'));
    this.setState({
        info:this.state.info.results
    })
}

femaleUsers = () => {
    console.log(this.state.info.results.filter(x=>x.gender === 'female'));
     this.state.info.results.filter(x=>x.gender === 'female').map(function(element){
         console.log(element)
         this.setState({
             info:element
         })
     });

}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-5  bg-success text-white">
            <h2>Filter Users list based on Gender </h2>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col-2">
            <input type="radio" value="Other" name="gender" checked={true} readOnly onClick={this.allUsers} /> All
            </div>
            <div className="col-2">
            <input type="radio" value="Male" name="gender" readOnly onClick={this.maleUsers}/> Male
            </div>
            <div className="col-2">
            <input type="radio" value="Female" name="gender" readOnly onClick={this.femaleUsers}/> Female
            </div>
        </div>
        <div className="row">
          <div className="col mt-5 p-3">
            <table className="table table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>City</th>
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
                            className="img-fluid"
                            alt="userPicture"
                          ></img>
                        }
                      </td>
                      <td>
                        {element.name.first} {element.name.last}
                      </td>
                      <td>{element.gender}</td>
                      <td>{element.email}</td>
                      <td>{element.location.city}</td>
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
export default Gender;
