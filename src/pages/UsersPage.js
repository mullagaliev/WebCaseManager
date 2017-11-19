import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScreenDashboard from '../layouts/ScreenDashboard';
import UsersContainer from '../containers/Users/UsersContainer';
import UserContainer from '../containers/Users/UserContainer';
import {Switch, Route} from 'react-router';

class UsersPage extends Component {

  render() {
    return (
        <ScreenDashboard>
          <Switch>
            <Route path='/users/:user' component={({match}) => {
              return <div>
                <h1 className="Title">
                  Пациент №{match.params.user}
                </h1>
                <UserContainer userId={match.params.user}/>
              </div>;
            }
            }/>
            <Route component={() => {
              return <div>
                <h1 className="Title">
                  Список Пациентов
                </h1>
                <UsersContainer/>
              </div>;
            }
            }/>
          </Switch>

        </ScreenDashboard>
    );
  }
}

UsersPage.propTypes = {};
UsersPage.defaultProps = {};

export default UsersPage;
