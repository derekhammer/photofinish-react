import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
