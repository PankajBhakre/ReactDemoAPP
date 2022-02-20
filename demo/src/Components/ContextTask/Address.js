import React, { Component } from 'react';
import Table from './Table';
import myContext from './ContextTask';

 class Address extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        header:['City','State','Country']
     }
   }
   
    render() {
        return (
          <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                  <div className="card-header">
                      <h2>Address</h2>
                  </div>
                  <div className="card-body">
                   <myContext.Consumer>
                     {(contextData)=>{
                       console.log(contextData)
                       return  contextData.length > 0 ?
                       <Table header={this.state.header} 
                         data = {[contextData[0].location.city,contextData[0].location.state,contextData[0].location.country]}
                       /> : <div></div>
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
export default Address;
