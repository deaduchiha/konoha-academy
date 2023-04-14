import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation();
  console.log(t);

  return (
    <header>
      <h1>{t("greeting")}</h1>
    </header>
  );
};

export default Home;
