import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Divider, Button } from 'semantic-ui-react';

class EditUser extends Component {
  render() {
    const {user} = this.props;
    return (
        <Form as={'div'}>
          <Form.Group>
            <Form.Input label='Фамилия' placeholder='Иванов' width={6} value={user.lastName} required/>
            <Form.Input label='Имя' placeholder='Иван' width={4} value={user.name} required/>
            <Form.Input label='Отчество' placeholder='Иванович' width={6} value={user.middleName} required/>
          </Form.Group>
          <Divider/>
          <Form.Group>
            <Form.Input label='Дата рождения' placeholder='00/00/2000' width={8} value={user.hbDate}/>
            <Form.Input label='Место рождения' placeholder='г. Москва ...' width={8} value={user.hbAddress}/>
          </Form.Group>
          <Divider/>
          <Form.Group>
            <Form.Input label='Номер телефона' placeholder='+7(999)-999-99-99' width={8} value={user.phone} required/>
            <Form.Input label='Адрес проживания' placeholder='г. Москва ...' width={8} value={user.hbAddress}/>
          </Form.Group>
          <Divider hidden/>
          <Button icon='checkmark' labelPosition='left' color={'green'} content={'Сохранить изменения'}/>
        </Form>
    );
  }
}

EditUser.propTypes = {};
EditUser.defaultProps = {};

export default EditUser;
