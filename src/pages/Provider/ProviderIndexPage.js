import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScreenDashboardProvider from '../../layouts/ScreenDashboardProvider';


class ProviderIndexPage extends Component {
  render() {
    return (
        <ScreenDashboardProvider>
          <div>index</div>
        </ScreenDashboardProvider>
    );
  }
}

ProviderIndexPage.propTypes = {};
ProviderIndexPage.defaultProps = {};

export default ProviderIndexPage;
