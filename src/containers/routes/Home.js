import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../../locale";
import CTASection from "../../components/Home/CTA";

const Home = () => {
  const [locale] = useLocale();
  return (
    <div>
      <CTASection />
      Home
      <div>locale: {locale}</div>
      <div>
        <Link to="/contact">Contact</Link> <Link to="/kontakt">Kontakt</Link>
      </div>
    </div>
  );
};

export default Home;
