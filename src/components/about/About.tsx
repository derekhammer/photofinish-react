import * as React from 'react';
import './About.css';
import Alex from '../../assets/images/portfolio/Alex.jpeg';
import Brad from '../../assets/images/portfolio/Brad.png';
import Brian from '../../assets/images/portfolio/Brian.jpeg';
import Derek from '../../assets/images/portfolio/Derek.jpeg';


class About extends React.Component {
  render(){
    return (
      <div className="About">
        <div className="about-header">
        </div>
        <div className="contributors">
          <div className="contributor">
            <h3 className="name">Jade</h3>
            <h4 className="title">C#/Unity Developer</h4>
          </div>
          <div className="contributor">
            <h3 className="name">Brad</h3>
            <img src={Brad} />
            <h4 className="title">UX/UI Artist</h4>
          </div>
          <div className="contributor">
            <h3 className="name">Justin</h3>
            <h4 className="title">Marketing Campaign Manager</h4>
          </div>
          <div className="contributor">
            <h3 className="name">James</h3>
            <h4 className="title">C#/Javascript Engineer</h4>
          </div>
          <div className="contributor">
            <h3 className="name">Alex</h3>
            <img src={Alex} />
            <h4 className="title">Javascript Engineer</h4>
          </div>
          <div className="contributor">
            <h3 className="name">Brian</h3>
            <img src={Brian} />
            <h4 className="title">Javascript Engineer</h4>
          </div>
          <div className="contributor">
            <h3 className="name">Derek</h3>
            <img src={Derek} />
            <h4 className="title">Javascript Engineer</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
