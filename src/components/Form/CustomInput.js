import React from 'react'
import './CustomInput.css'

const CustomInput = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={`form-group__input${touched && error ? ' form-group__input--error' : ''}`}
      id={input.name}
    />
    {touched &&
      ((error && <span className="form-group__error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)

export default CustomInput
