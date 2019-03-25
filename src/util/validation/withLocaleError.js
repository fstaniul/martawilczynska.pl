const withLocaleError = (errorString, method) => input =>
  method(input) ? null : errorString;

export default withLocaleError;
