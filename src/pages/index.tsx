import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { locale, locales, push } = useRouter();

  const handleClick = (l: any) => () => {
    push("/", undefined, { locale: l });
  };

  const { t } = useTranslation("homePage");

  return (
    <>
      <h1>{locale}</h1>

      <h2>{t("greeting")}</h2>

      <div>choose your locale</div>
      {locales?.map((l) => (
        <Button key={l} onClick={handleClick(l)}>
          {l}
        </Button>
      ))}
    </>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: { ...(await serverSideTranslations(locale, ["homePage"])) },
  };
};
