import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {OPENSV_API} from '../../constants/apiUrls';

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
                fontSize: H,
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
          <h1 className={'Title'}><b>0.</b> Исходное изображение</h1>
          <img src={`${OPENSV_API}/out/${image}/0.original.png`} alt="" className={styles.ImageA}/>
          <h1 className={'Title'}><b>1.</b> Повернутое изображение</h1>
          <img src={`${OPENSV_API}/out/${image}/1.rotated.png`} alt="" className={styles.ImageA}/>
          <h1 className={'Title'}><b>2.</b> Обрезанное изображение</h1>
          <img src={`${OPENSV_API}/out/${image}/2.crop.png`} alt="" className={styles.ImageA}/>
          <h1 className={'Title'}><b>3.</b> Предобработное изображение</h1>
          <div className={styles.Container}>
            {regions}
            <img src={`${OPENSV_API}/out/${image}/3.2.clean.png`} alt="" className={styles.Image}/>
          </div>
        </div>
    );
  }
}

AttachmentsEditor.propTypes = {};
AttachmentsEditor.defaultProps = {};

export default AttachmentsEditor;
