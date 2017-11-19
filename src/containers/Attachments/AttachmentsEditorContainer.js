import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AttachmentsEditor from '../../components/Attachments/AttachmentsEditor';
const request = require('superagent');

const api_key = 'd10d6e5ff2aa413e8f39ba1aa2ae241e';

class AttachmentsEditorContainer extends Component {
  state = {attach: {}};

  componentDidMount() {
    const {image} = this.props;
    request.post('http://eastus.api.cognitive.microsoft.com/vision/v1.0/ocr?')
        .send({language: 'unk', detectOrientation: true, url: `http://d96ee068.ngrok.io/out/${image}/3.2.clean.png`}) // query string
        .set('Ocp-Apim-Subscription-Key', api_key)
        .end((err, res) => {``
          if (res.body) {
            this.setState({attach: res.body});
          }
        });
  }

  render() {
    const {image} = this.props;
    return (
        <AttachmentsEditor image={image} attach={this.state.attach} onEdit={() => {}}/>
    );
  }
}

AttachmentsEditorContainer.propTypes = {};
AttachmentsEditorContainer.defaultProps = {};

export default AttachmentsEditorContainer;
