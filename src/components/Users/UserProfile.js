import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'

class UserProfile extends Component {
  render() {
    const {user} = this.props;
    return (
        <Card style={{width: '100%'}}>
          <Image src={user.avatar} />
          <Card.Content>
            <Card.Header>
              {`${user.lastName} ${user.name} ${user.middleName}`}
            </Card.Header>
            <Card.Meta>
        <span className='date'>
          <b>Дата роождения:</b> {user.hbDate}
          <br/>
          <b>Номер телефона:</b> {user.phone}
        </span>
            </Card.Meta>
            <Card.Description>
              {user.desc}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='history' />
              Обращения
            </a>
            <ul>
              <li>01.11.2017 Дерматолог</li>
              <li>05.11.2017 Дерматолог</li>
              <li>01.11.2017 Дерматолог</li>
              <li>10.11.2017 Дерматолог</li>
              <li>20.11.2017 Дерматолог</li>
            </ul>
          </Card.Content>
        </Card>
    );
  }
}

UserProfile.propTypes = {};
UserProfile.defaultProps = {};

export default UserProfile;
