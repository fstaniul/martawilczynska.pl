import React, { Component } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Form, Input, Textarea, Submit } from "../Forms";
import Flex from "../Containers/Flex";
import { isRequired, isEmail } from "../../util/validation";
import Axios from "axios";

const FormInputContainer = styled.div`
  padding: 0 1rem 1rem;
`;

const FormInput = props => (
  <FormInputContainer>
    <Input {...props} />
  </FormInputContainer>
);

const FormTextarea = props => (
  <FormInputContainer>
    <Textarea {...props} rows={6} />
  </FormInputContainer>
);

const FormSubmit = () => (
  <Flex justify="center" align="center">
    <Submit>
      <FormattedMessage id="home.contact-form.submit" />
    </Submit>
  </Flex>
);

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.fields = {
      name: {
        validator: isRequired("home.contact-form.error.name"),
        component: FormInput
      },
      email: {
        validator: [
          isRequired("home.contact-form.error.email"),
          isEmail("home.contact-form.error.email")
        ],
        component: FormInput
      },
      topic: {
        validator: isRequired("home.contact-form.error.topic"),
        component: FormInput
      },
      message: {
        validatior: isRequired("home.contact-form.error.message"),
        component: FormTextarea
      }
    };

    Object.keys(this.fields).forEach(key => {
      const props = {
        label: <FormattedMessage id={`home.contact-form.label.${key}`} />
      };
      this.fields[key].props = props;
    });
  }

  onSubmit = data => Axios.post("/api/contact", data);

  render() {
    return (
      <Form
        fields={this.fields}
        onSubmit={this.onSubmit}
        submit={<FormSubmit />}
      />
    );
  }
}
