import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import FormInput from '../FormInput';

const Form = ({ classes, handleSubmit }) => {
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <p className={classes.title}>Введите полное имя сайта:</p>
      <Field
        name="url"
        placeholder="https://www.tut.by"
        component={FormInput}
      />
      <Button variant="raised" color="primary" type="submit">
        Парсить
      </Button>
    </form>
  );
};

Form.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default compose(
  reduxForm(),
  withStyles(styles)
)(Form);
