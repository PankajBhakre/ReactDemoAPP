import React, { Component } from "react";
import B from "./B";
import myContext from "./ContextAPI";

class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pankaj",
      city: "Mumbai",
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>A Component</h2>
              </div>
              <div className="card-body">
                <myContext.Provider value={this.state}>
                  <B />
                </myContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default A;
