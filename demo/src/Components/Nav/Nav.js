import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class Nav extends Component {
  render() {
    return <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
            <Link to="/" className='navbar-brand'>
                Home
            </Link>
            <ul className='nav'>
                <li className='nav-item'>
                <Link to='/axios' className='nav-link text-white'>
                Axios
            </Link>
                </li>
                <li className='nav-item'>
                <Link to='/chatapp' className='nav-link text-white'>
                ChatApp
            </Link>
                </li>
                <li className='nav-item'>
                <Link to='/profile' className='nav-link text-white'>
                UserProfile
            </Link>
                </li>
                <li className='nav-item'>
                <Link to='/gender' className='nav-link text-white'>
                FilterApp
            </Link>
                </li>
                <li className='nav-item'>
                <Link to='/context' className='nav-link text-white'>
                ContextAPI
            </Link>
                </li>
                <li className='nav-item'>
                <Link to='/contextTask' className='nav-link text-white'>
                ContextTask
            </Link>
                </li>
            </ul>
        </div>
    </nav>;
  }
}
export default Nav;
