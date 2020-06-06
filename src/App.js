import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import './App.css';
// import store from './store'
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import Login from './components/Login';
import Home from './components/Home'
import Registration from './components/Registration'

function App() {
  return (
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
    <div className="App">
      {/* <header className="App-header"> */}
      <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/registration' exact component={Registration} />
      </BrowserRouter>
      {/* </header> */}
    </div>
     {/* </ConnectedRouter> */}
    </Provider>
  );
}

export default App;
