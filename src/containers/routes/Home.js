import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../../locale";

const Home = () => {
  const [locale] = useLocale();
  return (
    <div>
      Home
      <div>locale: {locale}</div>
      <div>
        <Link to="/contact">Contact</Link> <Link to="/kontakt">Kontakt</Link>
      </div>
    </div>
  );
};

export default Home;
