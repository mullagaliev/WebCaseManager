import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import EditAttachmentsPage from './EditAttachmentsPage';
import ProviderIndexPage from './ProviderIndexPage';


class ProviderPages extends Component {
  render() {
    return (
        <Switch>
          <Route path='/provider/edit/:image' component={({match}) => {
            return <EditAttachmentsPage image={match.params.image}/>;
          }}/>
          <Route component={ProviderIndexPage}/>
        </Switch>
    );
  }
}

ProviderPages.propTypes = {};
ProviderPages.defaultProps = {};

export default ProviderPages;
