import React from "react";
import Client from "./Client";
import Server from "./Server";


class Home extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data1: '',
       date2: ''
    }
  }

  updateParentState = (msg) => {
    this.setState({
        data1: msg
    })
}
updateParentState2 = (msg) => {
  this.setState({
      data2: msg
  })
}
  
  render() {
    return (
      <div className="container mt-5 p-3">
        <div className="row">
          <div className="col bg-dark text-white">
            <h2> Chatting Application</h2>
            {/* <p>ClientMsg = {this.state.data1}</p>
            <p>ServerMsg = {this.state.data2}</p> */}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
              <Client updateParentState = {this.updateParentState} message2 = {this.state.data2}/>
          </div>
          <div className="col-6">
              <Server message = {this.state.data1} updateParentState2 = {this.updateParentState2}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;