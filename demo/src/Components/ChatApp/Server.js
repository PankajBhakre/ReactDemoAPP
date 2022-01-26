import React from 'react';

 class Server extends React.Component {
   constructor(props) {
     super(props)
   
     this.state = {
      userData:''
     }
     this.textRef = React.createRef();
   }

   getData = () => {
     this.props.updateParentState2(this.textRef.current.value)
     this.textRef.current.value = ''
   }
   updateState=(event) =>{
    this.setState({
      userData: event.target.value,
    })
      }
   
  render() {
    return (
        <div className="container mt-3 p-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-primary text-white">
                    <h2>User2</h2>
                </div>
                <div className="card-body">
                    <input ref={this.textRef} type="text" placeholder="Enter text here"
                     onChange={this.updateState} className="form-control"></input>
                    <button className="btn btn-primary m-2" onClick={this.getData}>Send</button>
                </div>
                <div className="card-footer">
                    <h3>{this.props.message}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default Server;
