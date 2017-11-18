import React, {Component} from 'react';
import classNames from 'classnames';
import {Container, Grid} from 'semantic-ui-react';
import TopMenu from '../components/Header/TopMenu';

const styles = require('./Screen.sass');

class Screen extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const {header, fullScreen} = this.props;
    return <div className={classNames(styles.App)}>
      {
        !Boolean(header) ?
            <TopMenu/> :
            header
      }
      <section
          className={classNames(styles.AppContent, fullScreen ? styles.FullScreen : this.props.minHeader ? styles.AppContentMax : '')}>
        {fullScreen ?
            this.props.content :
            <Container>
              {this.props.content}
            </Container>
        }
      </section>
      <footer className={classNames(styles.AppFooter)}>
        <Container>
          {this.props.footer}
        </Container>
      </footer>
    </div>
  }
}

Screen.defaultProps = {
  showHeader: true,
  fullScreen: false,
  header: null,
  content: <h1>Empty page</h1>,
  footer: <Grid centered>
    <Grid.Column mobile={16} tablet={12} computer={8}>
      <h1>Is empty footer</h1>
    </Grid.Column>
  </Grid>
};

export default Screen;