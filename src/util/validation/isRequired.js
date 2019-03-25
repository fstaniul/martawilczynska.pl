const isRequired = input => {
  return input && typeof input === "string" && input !== "" ? true : false;
};

export default isRequired;
