import React, { Component } from 'react';
import Table from './Table';
import myContext from './ContextTask';

 class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       header:['UserName','Password']
    }
  }
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h2>Login</h2>
                    </div>
                    <div className="card-body">
                      <myContext.Consumer>
                        {(contextData)=>{
                          return contextData.length > 0 ? 
                          <Table header={this.state.header} 
                            data= {[contextData[0].login.username,contextData[0].login.password]}
                          />
                          : 
                          <div></div>
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

export default Login;
