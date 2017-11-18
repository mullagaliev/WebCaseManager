import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Header, Table, Rating, Button } from 'semantic-ui-react';

class UsersItem extends Component {
  render() {
    const {user} = this.props;

    return (
        <Table.Row>
          <Table.Cell>
            <Header as='h2' textAlign='center'>{user.id}</Header>
          </Table.Cell>
          <Table.Cell singleLine>{user.name}</Table.Cell>
          <Table.Cell>
            <Rating icon='star' rating={user.rating} defaultRating={3} maxRating={5} />
          </Table.Cell>
          <Table.Cell textAlign='right'>
            {user.progress * 100} % <br />
            <a href='#'>18 незаполненных полей</a>
          </Table.Cell>
          <Table.Cell>
            {
              user.status === 1 ? <Button as="a" href={`/users/${user.id}`} color={'orange'} fluid labelPosition='left' icon='warning' content='Дополнить'/> :
                  <Button as="a" href={`/users/${user.id}`} primary fluid labelPosition='left' icon='edit' content='Изменить'/>
            }
            <br/>
            <Button as="a" href={`/chat/${user.id}`} color={'green'} fluid labelPosition='left' icon='comments' content='Сообщение'/>
          </Table.Cell>
        </Table.Row>

    );
  }
}

UsersItem.propTypes = {};
UsersItem.defaultProps = {};

export default UsersItem;