import React, {Component} from 'react';
import PropTypes from 'prop-types';

import EditTextBlock from './EditTextBlock';

const styles = require('./AttachmentsEditor.sass');


class AttachmentsEditor extends Component {
  render() {
    const {image, attach} = this.props;
    const regions = attach.regions ? attach.regions.map((region, keyReg) => {
      return region.lines.map((line, keyRect) => {
        return line.words.map((word) => {
          const coord = word.boundingBox.split(',');
          const L = coord[0] + 'px';
          const T = coord[1] + 'px';
          const W = coord[2] + 'px';
          const H = coord[3] + 'px';
          return <EditTextBlock data={word}>
              <div
              className={styles.BlockText}
              style={{
                width: W,
                height: H,
                lineHeight: H,
                left: L,
                top: T
              }}>
            {word.text}
            </div>
          </EditTextBlock>
        });
      });
    }) : null;
    return (
        <div>
          {/*AttachmentsEditor*/}
          <div className={styles.Container}>
            {regions}
            <img src={image} alt="" className={styles.Image}/>
          </div>
        </div>
    );
  }
}

AttachmentsEditor.propTypes = {};
AttachmentsEditor.defaultProps = {};

export default AttachmentsEditor;
