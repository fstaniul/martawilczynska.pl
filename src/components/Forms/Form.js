import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const composeValidators = arrayOfValidators => input => {
  let error = null;
  arrayOfValidators.forEach(validator => {
    if (error === null) error = validator(input);
  });
  return error;
};

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Object.keys(props.fields).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {}),
      errors: Object.keys(props.fields).reduce((acc, key) => {
        acc[key] = null;
        return acc;
      }, {}),
      validated: Object.keys(props.fields).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {}),
      loading: false,
      error: null,
      success: false
    };
  }

  validate = () => {
    Object.keys(this.props.fields).forEach(field => this.validateField(field));
  };

  validateField = field => {
    this.setState(state => ({
      ...state,
      validated: { ...state.validated, [field]: true }
    }));

    const validator = this.props.fields[field].validator;
    if (typeof validator === "function")
      this.setState(state => ({
        ...state,
        errors: { ...state.errors, [field]: validator(state.data[field]) }
      }));
    else if (Array.isArray(validator))
      this.setState(state => ({
        ...state,
        errors: {
          ...state.errors,
          [field]: composeValidators(validator)(state.data[field])
        }
      }));
  };

  isValidated = () =>
    Object.values(this.state.validated).reduce((acc, val) => acc && val, true);

  onSubmit = event => {
    event.preventDefault();
    if (this.state.hasErrors) return;
    if (!this.isValidated()) return this.validate();

    this.setState({ loading: true });

    if (this.props.onSubmit)
      this.props
        .onSubmit(this.state.data)
        .then(
          () => this.setState({ success: true, loading: false, error: null }),
          err => this.setState({ error: err, success: false, loading: false })
        );
  };

  onChange = field => event => {
    const value = event.target.value;
    this.setState(state => ({
      ...state,
      data: { ...state.data, [field]: value }
    }));
  };

  onBlur = field => event => {
    this.validateField(field);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {Object.keys(this.props.fields).map(key => {
          const FormElementComponent =
            this.props.fields[key].component || Input;

          return (
            <FormElementComponent
              {...this.props.fields[key].props}
              key={key}
              name={key}
              error={this.state.errors[key]}
              value={this.state.data[key]}
              onChange={this.onChange(key)}
              onBlur={this.onBlur(key)}
            />
          );
        })}
        {this.props.submit}
      </form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submit: PropTypes.element.isRequired
};
