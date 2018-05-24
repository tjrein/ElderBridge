import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './css/navbar.css'

class Navbar extends Component {

  burgerToggle = () => {
    let linksEl = document.querySelector('.narrowLinks');
  	if (linksEl.style.display === 'block') {
  			linksEl.style.display = 'none';
  	} else {
  	  linksEl.style.display = 'block';
    }
  }

  render() {
    return (
        <nav>
            <h2>ElderBridge</h2>
        </nav>
    );
  }
}

export default Navbar;
