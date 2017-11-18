import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import IndexPage from './pages/IndexPage';

ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route path="/chat" component={ChatPage}/>
      <Route component={IndexPage}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));
