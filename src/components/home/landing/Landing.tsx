import * as React from 'react';
import './Landing.css';

class Landing extends React.Component {
  render(){
    return(
      <div className="Landing">
        <div className="text">
        </div>
        <div className="trailer">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jdszkrSARtY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    )
  }
}
export default Landing;
