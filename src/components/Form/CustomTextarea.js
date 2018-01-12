import React from 'react'
import './CustomTextarea.css'

const CustomTextarea = ({ input, placeholder, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <textarea
      {...input}
      placeholder={placeholder}
      className={`form-group__textarea${touched && error ? ' form-group__textarea--error' : ''}`}
      id={input.name}
    />
    {touched &&
      ((error && <span className="form-group__error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)

export default CustomTextarea
