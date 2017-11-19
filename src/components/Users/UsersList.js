import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header, Table, Rating, Button} from 'semantic-ui-react';
import UsersItem from './UsersItem';

// const users = [
//   {
//     id: 1,
//     name: 'Муллагалиев Андрей Андреевич',
//     rating: 3,
//     progress: 0.8,
//     status: 0
//   },
//   {
//     id: 2,
//     name: 'Муллагалиев Венер Андреевич',
//     rating: 4,
//     progress: 0.6,
//     status: 1
//   }
// ];

class UsersList extends Component {
  render() {
    const {users} = this.props;

     return (
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Номер</Table.HeaderCell>
              <Table.HeaderCell>ФИО</Table.HeaderCell>
              <Table.HeaderCell>Рейтинг</Table.HeaderCell>
              <Table.HeaderCell textAlign='right'>Прогресс профиля</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Действие</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              users.map((user) => {
                return <UsersItem key={user.id} user={user}/>
              })
            }
          </Table.Body>
        </Table>
    );
  }
}

UsersList.propTypes = {};
UsersList.defaultProps = {};

export default UsersList;
