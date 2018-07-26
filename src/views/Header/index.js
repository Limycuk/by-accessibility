import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Header = ({ classes }) => {
  return (
    <header className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Проверка доступности навигации сайтов
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Header);
