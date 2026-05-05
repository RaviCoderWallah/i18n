import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("common"); // loads /locales/{lang}/common.json

  const handleOnChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header">
      <NavLink to="/"><p>{t("nav_home")}</p></NavLink>
      <NavLink to="/quiz"><p>{t("nav_quiz")}</p></NavLink>
      <NavLink to="/login"><p>{t("nav_login")}</p></NavLink>
      <NavLink to="/about-us"><p>{t("nav_about")}</p></NavLink>

      <select name="" id="" onChange={handleOnChange}>
        <option value="en">{t("lang_en")}</option>
        <option value="hi">{t("lang_hi")}</option>
      </select>
    </div>
  );
};

export default Header;
