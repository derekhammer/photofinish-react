import * as React from 'react';
import './Home.css';
import Landing from './landing/Landing';
import Parallax from './parallax/Parallax';
import BlogFetch from './blogFetch/BlogFetch';
import Carousel from './carousel/Carousel';

class Home extends React.Component {
  render() {
    return(
      <div className="Home">
        <p>Home</p>
        <div className="Landing">
          <Landing />
        </div>
        <div className="Parallax">
          <Parallax />
        </div>
        <div className="Carousel">
          <Carousel />
        </div>
        <div className="Parallax">
          <Parallax />
        </div>
        <div className="BlogFetch">
          <BlogFetch />
        </div>
      </div>
    );
  }
}
export default Home;