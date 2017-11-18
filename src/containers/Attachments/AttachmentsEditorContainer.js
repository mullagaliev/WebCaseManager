import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AttachmentsEditor from '../../components/Attachments/AttachmentsEditor';
const request = require('superagent');

const api_key = 'd10d6e5ff2aa413e8f39ba1aa2ae241e';
const image = 'https://i.ytimg.com/vi/O4Ley2BBJUs/maxresdefault.jpg';

class AttachmentsEditorContainer extends Component {
  state = {attach: {}};

  componentDidMount() {
    request.post('http://eastus.api.cognitive.microsoft.com/vision/v1.0/ocr?')
        .send({language: 'unk', detectOrientation: true, url: image}) // query string
        .set('Ocp-Apim-Subscription-Key', api_key)
        .end((err, res) => {
          if (res.body) {
            this.setState({attach: res.body});
          }
        });
  }

  render() {
    console.log(this.state);
    return (
        <AttachmentsEditor image={image} attach={this.state.attach} onEdit={() => {}}/>
    );
  }
}

AttachmentsEditorContainer.propTypes = {};
AttachmentsEditorContainer.defaultProps = {};

export default AttachmentsEditorContainer;
