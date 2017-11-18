import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import IndexPage from './pages/IndexPage';
import UsersPage from './pages/UsersPage';
import ProviderPages from './pages/Provider/ProviderPages';

import 'semantic-ui-css/semantic.min.css';
import './theme/global-theme-style.css';

const styles = require('./App.sass');


ReactDOM.render(<BrowserRouter>
    <Switch>
      <Route path="/chat" component={ChatPage}/>
      <Route path="/users" component={UsersPage}/>
      <Route path="/provider/*" component={ProviderPages}/>
      <Route component={IndexPage}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));
