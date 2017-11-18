import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScreenDashboardProvider from '../../layouts/ScreenDashboardProvider';
import AttachmentsEditorContainer from '../../containers/Attachments/AttachmentsEditorContainer';

class EditAttachmentsPage extends Component {
  render() {
    return (
        <ScreenDashboardProvider>
          <AttachmentsEditorContainer/>
        </ScreenDashboardProvider>
    );
  }
}

EditAttachmentsPage.propTypes = {};
EditAttachmentsPage.defaultProps = {};

export default EditAttachmentsPage;
