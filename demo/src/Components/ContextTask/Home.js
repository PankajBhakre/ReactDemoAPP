import React from "react";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import Login from "./Login";
import axios from "axios";
import myContext from "./ContextTask";

class Home extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userData: []
      }
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=1').then((res)=>{
            console.log(res.data.results);
            this.setState({
                userData:res.data.results
            })
        },()=>{
            alert('Error while fetching the data');
        })
    }

    
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
                <div className="col-4">
                  <img src={this.state.userData.length >0 ? this.state.userData[0].picture.medium : ""} 
                  alt="Burger" height="500px" width="100%"/>
                </div>
                <myContext.Provider value={this.state.userData}>
                <div className="col-8">
                  <div className="row">
                    <div className="col">
                      <PersonalDetails />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-6">
                        <Address/>
                    </div>
                    <div className="col-6">
                        <Login/>
                    </div>
                  </div>
                </div>
                </myContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;