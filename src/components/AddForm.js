import React from 'react';
import { connect } from "react-redux";
import { Form, Field, reduxForm } from 'redux-form';
import compose from 'ramda/src/compose';
import CustomInput from './Form/CustomInput';
import CustomTextarea from './Form/CustomTextarea';
import './AddForm.css';

const cn = require('bem-cn')('form-container');

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Обязательное поле'
  }

  if (!values.body) {
    errors.body = 'Обязательное поле'
  }

  return errors
}

const connector = compose(
  reduxForm({
    form: 'addForm',
    validate,
  }),
  connect(state => ({
    state
  }))
)

class AddForm extends React.Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return <div className={`${cn}`}>
      <h4 className={`${cn('title')}`}>Форма создания поста</h4>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="title"
              component={CustomInput}
              type="text"
              placeholder="Название поста"
            />
          </div>
          <div>
            <Field
              name="body"
              component={CustomTextarea}
              placeholder="Содержание поста" />
          </div>
        </div>
        <div>
          <button disabled={pristine || submitting} className="form-group__button">
            Создать пост
          </button>
        </div>
      </Form>
    </div>
  }
}

export default connector(AddForm);
