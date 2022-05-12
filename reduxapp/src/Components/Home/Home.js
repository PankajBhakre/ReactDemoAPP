import React, { Component } from 'react';
import Name from '../Name/Name.js';
import nameAction from '../../Actions/NameAction.js';

 class Home extends Component {
    constructor(props){
      super();
      this.state = {
        name: ''
      }
    }
    sendDataToAction=()=>{
      nameAction(this.state.name);
    }
  render() {
    return (
      <div className='container mt-5'>
          <div className='col'>
                <div className='card'>
                    <div className='card-header'>
                        <input type="text" onChange= {(e)=>{
                          this.setState({
                            name:e.target.value
                          })
                        }}/>
                        <button  className='btn btn-primary m-3' onClick={this.sendDataToAction}>Send</button>
                    </div>
                    <div className='card-body'>
                        <Name/>
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

export default Home
