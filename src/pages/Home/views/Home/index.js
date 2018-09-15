import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import FormContainer from '../../containers/FormContainer';

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <FormContainer />
      <div className={classes.results} />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Home);
