import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home"); // loads /locales/{lang}/home.json

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <h2>{t("secondary_title")}</h2>
      <p>{t("secondary_description")}</p>
    </div>
  );
};

export default Home;
