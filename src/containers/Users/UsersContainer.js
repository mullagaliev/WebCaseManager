import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersList from '../../components/Users/UsersList';
import {BACKEND_API} from '../../constants/apiUrls';
import Avatar from '../../static/avatarYou.png';

const request = require('superagent');


class UsersContainer extends Component {
  state = {users: []};

  componentDidMount() {
    request.get(`${BACKEND_API}/all_users`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          console.log(res);
          if (res.body) {
            const users = res.body.map((user) => {
              const {address} = user;
              const {name} = user;
              return {
                id: user.id,
                gender: user.gender,
                lastName: name[0].family[0],
                name: name[0].given[0],
                middleName: name[0].family[1],
                phone: '+7(999)-999-19-20',
                avatar: Avatar,
                rating: 3,
                progress: 0.8,
                status: 0,
                hbDate: user.birthDate,
                desc: 'Краткая история болезни'
              };
            });
            this.setState({users});
          }
        });
  }

  render() {
    const {users} = this.state;
    return (
        <UsersList users={users}/>
    );
  }
}

UsersContainer.propTypes = {};
UsersContainer.defaultProps = {};

export default UsersContainer;
