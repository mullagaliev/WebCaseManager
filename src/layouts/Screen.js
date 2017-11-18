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
    const {showHeader, fullScreen} = this.props;
    return <div className={classNames(styles.App)}>
      {
        showHeader ?
            <TopMenu/> :
            null
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
  header: <div>
    {/*<div className={classNames(styles.AppHeaderLogo)}>*/}
    {/*<img src={logo} alt=""/>*/}
    {/*</div>*/}
    <h1 className={classNames(styles.AppTitle)}>Welcome to Troovy admin panel</h1>
  </div>,
  content: <h1>Empty page</h1>,
  footer: <Grid centered>
    <Grid.Column mobile={16} tablet={12} computer={8}>
      <h1>Is empty footer</h1>
    </Grid.Column>
  </Grid>
};

export default Screen;