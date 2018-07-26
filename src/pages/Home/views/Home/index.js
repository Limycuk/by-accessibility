import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      Home
      <div>test</div>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Home);
