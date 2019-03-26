const isRequired = msg => input => {
  return input && typeof input === "string" && input !== "" ? null : msg;
};

export default isRequired;
