import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersDetail from '../../components/Users/UsersDetail';
import Avatar from '../../static/avatarYou.png';
import {BACKEND_API} from '../../constants/apiUrls';


// const user = {
//   id: 1,
//   lastName: 'Иванова',
//   name: 'Анна',
//   middleName: 'Ивановна',
//   phone: '+7(999)-999-19-20',
//   avatar: Avatar,
//   rating: 3,
//   progress: 0.8,
//   status: 0,
//   hbDate: '19.08.1996',
//   hbAddress: 'г. Москва ул. Ленина 1',
//   desc: 'Краткая история болезни'
// };
const request = require('superagent');

class UserContainer extends Component {
  state = {user : null};
  componentDidMount() {
    request.get(`${BACKEND_API}/user/${this.props.userId}`)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          console.log(res);
          if (res.body) {
            let user = res.body;
            const {address} = user;
            const {name} = user;
            user = {
                id: user.id,
                gender: user.gender,
                lastName: name[0].family[0],
                name: name[0].given[0],
                middleName: name[0].family[1],
                phone: user.telecom[0].value,
                avatar: Avatar,
                rating: 3,
                progress: 0.8,
                status: 0,
                hbDate: user.birthDate,
                hbAddress: address ? `${address[0].district} ${address[0].city} ${address[0].line[0]}` : "",
                desc: 'Краткая история болезни'
              };
            this.setState({user});
          }
        });
  }
  render() {
    const { user } = this.state;
    return (
        <UsersDetail user={user}/>
    );
  }
}

UserContainer.propTypes = {};
UserContainer.defaultProps = {};

export default UserContainer;
