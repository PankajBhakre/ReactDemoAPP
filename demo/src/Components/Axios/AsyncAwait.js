import React, { Component } from 'react';
import axios from 'axios';

 class AsyncAwait extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        userInfo: []
       }
      // this.getUserData = this.getUserData.bind(this);  // What is use ?
     }

      getUserData = async () => {
        const result =   await  axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(result.data);
        this.setState({
            userInfo:result.data
        });
        }

    // async getUserData() {
    //  const result =   await  axios.get("https://jsonplaceholder.typicode.com/users")
    //  console.log(result.data);
    //  this.setState({
    //      userInfo:result.data
    //  });
    //  }
     
  render() {
    return (
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <button className="btn btn-primary" onClick={this.getUserData}>
                Get Data
              </button>
            </div>
          </div>
              { this.state.userInfo.length > 0 ? (
                  <div className="row">
          <div className="col">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>CITY</th>
                      <th>PHONE</th>
                      <th>COMPANY_NAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.userInfo.map(function (element, index) {
                      return (
                        <tr>
                          <td>{element.id}</td>
                          <td>{element.name}</td>
                          <td>{element.email}</td>
                          <td>{element.address.city}</td>
                          <td>{element.phone}</td>
                          <td>{element.company.name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
          </div>
              ) : (
                  <div className="text-danger row mt-5">
              <h2> Data is not Available</h2>
            </div>
              )
                  
              }
        </div>
      );
  }
}
export default AsyncAwait;
