import * as React from 'react';
import Logo from '../../assets/images/logo/nav-3.png';
import './NavBar.css';

class NavBar extends React.Component {
  render(){
    return(
      <div className="NavBar">
        <nav>
          <div className="logo"><img src={Logo} /></div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
