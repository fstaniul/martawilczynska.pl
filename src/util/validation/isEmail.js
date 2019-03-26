import _isEmail from "validator/lib/isEmail";

const isEmail = msg => input => (_isEmail(input) ? null : msg);

export default isEmail;
