import React, {Component} from 'react';
import Screen from './Screen';
// import HeadMenu from '../components/Headers/DashboardHeadMenu';

const styles = require('./Screen.sass');


class ScreenDashboard extends Component {
  render() {
    return (
      <Screen
        minHeader={true}
        header={
         <div>menu</div>
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

