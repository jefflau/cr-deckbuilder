import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'text' ];

const validate = values => {
  const errors = {}
  if (!values.text) {
    errors.text = 'This field is required'
  }
  return errors
}

class AddTodoForm extends Component {
  render() {
    const {
      fields: { text },
      handleSubmit,
      submitting
      } = this.props

    return (<form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Text</label>
          <input type="text" placeholder="todo text" {...text}/>
          {text.touched && text.error && <div>{text.error}</div>}
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Create Todo
          </button>
        </div>
      </form>
    )
  }
}

AddTodoForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'addTodoForm',
  fields,
  validate
})(AddTodoForm)
