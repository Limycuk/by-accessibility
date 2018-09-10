import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Form />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Home);
