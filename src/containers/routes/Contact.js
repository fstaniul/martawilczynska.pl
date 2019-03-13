import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../../locale";

const Contact = () => {
  const [locale] = useLocale();
  return (
    <div>
      Contact
      <div>locale: {locale}</div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Contact;
