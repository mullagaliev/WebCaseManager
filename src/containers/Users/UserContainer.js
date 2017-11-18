import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersDetail from '../../components/Users/UsersDetail';
import Avatar from '../../static/avatarYou.png';


const user = {
  id: 1,
  lastName: 'Иванова',
  name: 'Анна',
  middleName: 'Ивановна',
  phone: '+7(999)-999-19-20',
  avatar: Avatar,
  rating: 3,
  progress: 0.8,
  status: 0,
  hbDate: '19.08.1996',
  hbAddress: 'г. Москва ул. Ленина 1',
  desc: 'Краткая история болезни'
};

class UserContainer extends Component {
  render() {
    return (
        <UsersDetail user={user}/>
    );
  }
}

UserContainer.propTypes = {};
UserContainer.defaultProps = {};

export default UserContainer;
