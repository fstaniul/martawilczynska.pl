const composeValidate = methods => input => {
  let error = null;
  if (!methods) return null;
  methods.forEach(method => {
    if (error !== null) return;
    const temp = method(input);
    if (temp !== null) error = temp;
  });

  return error;
};

export default composeValidate;
