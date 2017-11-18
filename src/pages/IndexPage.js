import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScreenDashboard from '../layouts/ScreenDashboard';

class IndexPage extends Component {

  render() {
    return (
        <ScreenDashboard>
          <h1 className="Title">
            Hello. I am index page!
          </h1>
        </ScreenDashboard>
    );
  }
}

IndexPage.propTypes = {};
IndexPage.defaultProps = {};

export default IndexPage;
