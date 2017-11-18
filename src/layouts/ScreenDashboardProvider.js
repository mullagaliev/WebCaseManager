import React, {Component} from 'react';
import Screen from './Screen';
import TopMenuProvider from '../components/Header/TopMenuProvider';

const styles = require('./Screen.sass');


class ScreenDashboard extends Component {
  render() {
    return (
      <Screen
        header={
          <TopMenuProvider/>
        }
        content={
          <div>
            {this.props.children}
          </div>
        }
      />
    );
  }
}


export default ScreenDashboard;

