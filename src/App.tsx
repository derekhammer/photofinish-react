import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/home/Home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
