import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import UserProfile from './UserProfile';
import EditUser from './EditUser';

class UsersDetail extends Component {
  render() {
    const {user} = this.props;
    if(user !== null)
      return (
      <Grid columns={2} padded>
        <Grid.Column>
          <UserProfile user={user}/>
        </Grid.Column>
        <Grid.Column>
          <EditUser user={user}/>
        </Grid.Column>
      </Grid>
      );
    return <div>empty</div>;
  }
}

UsersDetail.propTypes = {};
UsersDetail.defaultProps = {};

export default UsersDetail;
