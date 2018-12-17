import * as React from 'react';
import './About.css';
import Alex from '../../assets/images/portfolio/Alex.jpeg';
import Brad from '../../assets/images/portfolio/Brad.png';
import Brian from '../../assets/images/portfolio/Brian.jpeg';
import Derek from '../../assets/images/portfolio/Derek.jpeg';
import Placeholder from '../../assets/images/portfolio/placeholder.png';


class About extends React.Component {
  render(){
    return (
      <div className="About">
        <div className="about-header">
          <h1>Our Team</h1>
        </div>
        <div className="contributors">
          <div className="contributor">
            <a href="#"><img src={Placeholder} /></a>
            <h3 className="name">Jade</h3>
            <h4 className="title">C#/Unity Developer</h4>
          </div>
          <div className="contributor">
            <a href="https://bitradical.wixsite.com/portfolio"><img src={Brad} /></a>
            <h3 className="name">Brad</h3>
            <h4 className="title">UX/UI Artist</h4>
          </div>
          <div className="contributor">
            <a href="#"><img src={Placeholder} /></a>
            <h3 className="name">Justin</h3>
            <h4 className="title">Marketing Campaign Manager</h4>
          </div>
          <div className="contributor">
            <a href="https://github.com/Hanleyjames"><img src={Placeholder} /></a>
            <h3 className="name">James</h3>
            <h4 className="title">C#/Javascript Engineer</h4>
          </div>
          <div className="contributor">
            <a href="https://github.com/thacheshirecat"><img src={Alex} /></a>
            <h3 className="name">Alex</h3>
            <h4 className="title">Javascript Engineer</h4>
          </div>
          <div className="contributor">
            <a href="https://github.com/bpalowski"><img src={Brian} /></a>
            <h3 className="name">Brian</h3>
            <h4 className="title">Javascript Engineer</h4>
          </div>
          <div className="contributor">
            <a href="https://github.com/derekhammer"><img src={Derek} /></a>
            <h3 className="name">Derek</h3>
            <h4 className="title">Javascript Engineer</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
