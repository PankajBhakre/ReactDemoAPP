import React from "react";

class Child extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Pankaj',
         city: 'Mumbai'
      }
    }

    sendData = () =>{
        this.props.updateParentState(this.state.name, this.state.city);
    }
    
  render() {
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">
            <h2>Child Component</h2>
        </div>
        <div className="card-body">
            <button className="btn btn-outline-primary" onClick={this.sendData}>Send Data to Parent</button>
        </div>
      </div>
    );
  }
}

export default Child;
