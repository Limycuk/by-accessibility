import React, { PureComponent } from 'react';

import Form from '../views/Form';
import { FORM_NAME, WEB_SITE_REGULAR } from '../constants';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.handleHtml = this.handleHtml.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    fetch(`http://localhost:3001`, {
      method: 'get'
    })
      .then((response) => response.json())
      .then(this.handleHtml);
  }

  handleHtml({ html }) {
    console.log('html === ', html);
  }

  static validate(data) {
    const error = {};

    if (!data.url) {
      error.url = 'Обязательное поле';
    } else if (!WEB_SITE_REGULAR.test(data.url)) {
      error.url = 'Введите корректный путь к сайту';
    }

    return error;
  }

  render() {
    const props = {
      form: FORM_NAME,
      validate: FormContainer.validate,
      onSubmit: this.onSubmit
    };

    return <Form {...props} />;
  }
}

export default FormContainer;
