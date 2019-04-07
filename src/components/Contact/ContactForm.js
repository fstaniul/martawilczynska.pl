import React, { useReducer, useCallback, useMemo, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import { useLocale } from '../../util/locale';
import { Form, Input, Textarea, SubmitButton, ErrorMessage } from '../Forms';

const FieldContainer = styled.div`
  padding-bottom: 2rem;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

function isRequired(value) {
  return typeof value === 'string' && value !== '';
}

function composeValidate(validators) {
  return value => validators.reduce((acc, validate) => acc && validate(value), true);
}

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

function ContactForm({ intl }) {
  const [locale] = useLocale();
  const [status, setStatus] = useState('pending');
  const [data, setData] = useReducer(reducer, {
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setError] = useReducer(reducer, {
    name: null,
    email: null,
    subject: null,
    message: null
  });
  const [validated, setValidated] = useReducer(reducer, {
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const hasError = useCallback(() => {
    return !Object.values(errors).reduce((acc, value) => value === null && acc, true);
  }, [errors]);

  const wasValidated = useCallback(() => {
    return Object.values(validated).reduce((acc, value) => value && acc, true);
  }, [validated]);

  const fields = useMemo(() => [
    { name: 'name', validate: isRequired },
    { name: 'email', type: 'email', validate: composeValidate([isRequired, isEmail]) },
    { name: 'subject', validate: isRequired },
    { name: 'message', Component: Textarea, validate: isRequired }
  ]);

  const updateValue = name => event => setData({ name, value: event.target.value });

  const validate = name => () => {
    setValidated({ name, value: true });
    const validator = fields.find(f => f.name === name).validate;
    const isOk = validator(data[name]);
    setError({ name, value: isOk ? null : `contact.form.error.${name}` });
  };

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      fields.forEach(field => validate(field.name)(data[field.name])); // run validation
      if (hasError() || !wasValidated()) return;

      setStatus('loading');
      return axios
        .post('/api/contact', data, { params: { locale } })
        .then(() => setStatus('success'))
        .catch(() => setStatus('error'));
    },
    [locale, data, fields, wasValidated, hasError, validate]
  );

  return (
    <Form onSubmit={onSubmit} setState={setStatus} state={status} anotherMessageId="contact.form.success.another">
      {fields.map(({ Component = Input, ...props }) => (
        <FieldContainer key={props.name}>
          <Component
            {...props}
            label={intl.formatMessage({ id: `contact.form.fields.${props.name}` })}
            value={data[props.name]}
            onChange={updateValue(props.name)}
            onBlur={validate(props.name)}
            hasError={!!errors[props.name]}
          />
          {errors[props.name] !== null && <ErrorMessage message={errors[props.name]} />}
        </FieldContainer>
      ))}
      <SubmitButtonContainer>
        <SubmitButton type="submit">
          <FormattedMessage id="contact.form.submit" />
        </SubmitButton>
      </SubmitButtonContainer>
    </Form>
  );
}

export default injectIntl(ContactForm);
