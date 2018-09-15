import React, { PureComponent } from 'react';

import Form from '../views/Form';
import { FORM_NAME, WEB_SITE_REGULAR } from '../constants';

class FormContainer extends PureComponent {
  onSubmit(data) {
    console.log(data);
    fetch(data.url, {
      method: 'get',
      mode: 'no-cors'
    })
      .then((response) => response.text())
      .then((html) => console.log(`html = ${html}`));
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
