import React, { useReducer, useRef } from "react";
import styled from "styled-components";
import isEmail from "validator/lib/isEmail";
import { injectIntl } from "react-intl";
import composeValidate from "../../../util/validation/composeValidate";
import { Input, Textarea } from "../../../components/Forms";
import withLocaleError from "../../../util/validation/withLocaleError";
import isRequired from "../../../util/validation/isRequired";

const Container = styled.div`
  padding: 2rem;
`;

const ItemWrapper = styled.div`
  padding-bottom: 1rem;
`;

const stateReducer = (state, value) => ({
  ...state,
  ...value,
  data: { ...state.data, ...value.data },
  error: { ...state.error, ...value.error }
});

const VALIDATORS = {
  name: [withLocaleError("home.contact-form.error.name", isRequired)],
  email: [
    withLocaleError("home.contact-form.error.email", isRequired),
    withLocaleError("home.contact-form.error.email", isEmail)
  ],
  topic: [withLocaleError("home.contact-form.error.topic", isRequired)],
  message: [withLocaleError("home.contact-form.error.message", isRequired)]
};

const ContactForm = ({ intl: { formatMessage } }) => {
  const formRefs = useRef({});

  const [state, setState] = useReducer(stateReducer, {
    loading: false,
    data: {
      name: "",
      email: "",
      topic: "",
      message: ""
    },
    error: {
      name: null,
      email: null,
      topic: null,
      message: null
    }
  });

  const onChange = name => e => setState({ data: { [name]: e.target.value } });
  const validate = name => input =>
    setState({ error: { [name]: composeValidate(VALIDATORS[name])(input) } });

  const { data, error } = state;

  return (
    <Container>
      {Object.keys(data).map(key => {
        const FormElement = key === "message" ? Textarea : Input;
        return (
          <ItemWrapper key={key}>
            <FormElement
              value={data[key]}
              onChange={onChange(key)}
              label={formatMessage({ id: `home.contact-form.${key}` })}
              validate={validate(key)}
              ref={ref => (formRefs.current[key] = ref)}
              error={error[key]}
            />
          </ItemWrapper>
        );
      })}
    </Container>
  );
};

export default injectIntl(ContactForm);
