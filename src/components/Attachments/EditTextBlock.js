import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'semantic-ui-react';
import { Form, Input } from 'semantic-ui-react';

class EditTextBlock extends Component {
  state = {open: false};

  show = size => () => this.setState({size, open: true});
  close = () => this.setState({open: false});

  render() {
    const {open} = this.state;
    const {children, data} = this.props;

    return (
        <Modal size={'large'} open={open} onClose={this.close}
               trigger={<div onClick={this.show()}>{children}</div>}>
          <Modal.Header>
            Редактирование данных блока с текстом "{data.text}"
          </Modal.Header>
          <Modal.Content>
            {/*{JSON.stringify(data)}*/}
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                  <label>Текст</label>
                  <Input placeholder={data.text} defaultValue={data.text}/>
                </Form.Field>
                <Form.Field>
                  <label>Параметр 2</label>
                  <Input placeholder='param2' />
                </Form.Field>
                <Form.Field>
                  <label>Параметр 3</label>
                  <Input placeholder='param3' />
                </Form.Field>
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button onClick={this.close} positive icon='checkmark' labelPosition='right' content='Готово'/>
          </Modal.Actions>
        </Modal>
    );
  }
}

EditTextBlock.propTypes = {};
EditTextBlock.defaultProps = {};

export default EditTextBlock;
