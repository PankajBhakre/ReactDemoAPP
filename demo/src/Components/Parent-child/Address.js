import React, { Component } from "react";

class Address extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                  <h2>Address Component</h2>
              </div>
              <div className="card-body">
                  <p>City: {this.props.city}</p>
                  <p>Country: {this.props.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
