import React from 'react';
import { connect } from "react-redux";
import { Form, Field, reduxForm } from 'redux-form'
import compose from 'ramda/src/compose'

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
    return <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Название поста"
            />
          </div>
          <div>
            <Field name="body" component="textarea" placeholder="Содержание поста" />
          </div>
        </div>
        <div>
          <button disabled={pristine || submitting}>
            Создать пост
          </button>
        </div>
      </Form>
    </div>
  }
}

export default connector(AddForm);
