import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

import Logo from '../../static/logo.png';

class TopMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
        <Menu stackable size={'large'} className={'m0'}>
          <Menu.Item as="a">
            <img src={Logo} />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/provider/index"
                     activeClassName="selected">
            Главная
          </Menu.Item>
          <Menu.Item as={NavLink} to="/provider/attachments"
                     activeClassName="selected">
            Список документов
          </Menu.Item>
          <Menu.Item as={NavLink} to="/provider/edit/"
                     activeClassName="selected">
            Редактор
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
                name='sign-in'
                active={activeItem === 'sign-in'}
                onClick={this.handleItemClick}
            >
              Настройки
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}

TopMenu.propTypes = {};
TopMenu.defaultProps = {};

export default TopMenu;
