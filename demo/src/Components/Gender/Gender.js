import React, { Component } from "react";
import { userData } from "./../../UserData.js";

class Gender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: userData.results,
    };
  }


  allUsers = () => {
      this.setState({
          info: userData.results
      })
  }
  maleUsers = (event) => {
    if(event.target.value === 'Male'){
      this.filteredarray = userData.results.filter(x=>x.gender === 'male')
    this.setState({
        info:this.filteredarray
    })
    }
    
    console.log(userData.results.filter(x=>x.gender === 'male'));
}

femaleUsers = (event) => {
 if(event.target.value === 'Female'){
  this.filteredarray = userData.results.filter(x=>x.gender === 'female')
  this.setState({
      info:this.filteredarray
  })
 }
  console.log(userData.results.filter(x=>x.gender === 'female'));

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
            <div className="col-1">
            <input type="radio" value="Other" name="gender"   onChange={this.allUsers} /> All
            </div>
            <div className="col-1">
            <input type="radio" value="Male" name="gender"  onChange={this.maleUsers}/> Male
            </div>
            <div className="col-1">
            <input type="radio" value="Female" name="gender"  onChange={this.femaleUsers}/> Female
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
                {this.state.info.map(function (element) {
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
