import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(){
        super()
        this.State = {       // state is special object
            title:'Welcome to React',
            city: 'Mumbai'
        }
    }
    render() {
      return (
        <div className='title'>
        <h2>{this.State.title}</h2>
        <p>{this.State.city}</p>
    </div>
      );  

    }
}

export  default Header;
