/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import myContext from "./ContextTask";
import Table from "./Table";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: ["Name", "Gender", "Phone", "Email"],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h2>Personal Details</h2>
              </div>
              <div className="card-body">
                <myContext.Consumer>
                  {(contextData) => {
                    console.log(contextData);
                    return contextData.length > 0 ? 
                    <Table header={this.state.header}
                     data={[contextData[0].name.first,contextData[0].gender, contextData[0].phone,contextData[0].email]}/> 
                     : <div></div>
                  }}
                </myContext.Consumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalDetails;
