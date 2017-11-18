import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersList from '../../components/Users/UsersList';

class UsersContainer extends Component {
  render() {
    return (
        <UsersList/>
    );
  }
}

UsersContainer.propTypes = {};
UsersContainer.defaultProps = {};

export default UsersContainer;
