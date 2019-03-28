import { useMemo } from "react";
import { useLocale, localizePath } from "../../util/locale";

const useNavRoutes = () => {
  const [locale] = useLocale();
  const routes = useMemo(
    () => ({
      home: "/",
      about: localizePath(locale, "about"),
      treatments: localizePath(locale, "treatments"),
      testimonials: localizePath(locale, "testimonials"),
      staff: localizePath(locale, "staff"),
      directions: localizePath(locale, "directions"),
      contact: localizePath(locale, "contact")
    }),
    [locale]
  );

  return routes;
};

export default useNavRoutes;
