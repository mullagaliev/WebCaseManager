import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Chat from '../components/Chat/Chat';
import {Label, Menu, Tab} from 'semantic-ui-react';
import ScreenDashboard from '../layouts/ScreenDashboard';

const panes = [
  {
    menuItem: <Menu.Item key='messages1'>Андрей<Label>10</Label></Menu.Item>,
    render: () => <Tab.Pane>
      <Chat user={'Андрей'}/>
    </Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='messages2'>Анна<Label>3</Label></Menu.Item>,
    render: () => <Tab.Pane>
      <Chat user={'Анна'}/>
    </Tab.Pane>,
  },
];

class ChatPage extends Component {

  render() {
    return (
        <ScreenDashboard>
          <Tab panes={panes} renderActiveOnly={true}/>
        </ScreenDashboard>
    );
  }
}

ChatPage.propTypes = {};
ChatPage.defaultProps = {};

export default ChatPage;
