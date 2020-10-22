import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EnterName from './components/enterName';
import Questions from './components/questions';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Router forceRefresh={true}>
          
          <Switch>
            <Route exact path="/" component={EnterName} />
            <Route exact path="/quizz" component={Questions} />
          </Switch>
          
        </Router>
      </div>
  </Provider>
  );
}

export default App;
