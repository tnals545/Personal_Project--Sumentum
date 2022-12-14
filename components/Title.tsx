import Head from "next/head";

interface Title {
  title: string;
}

// page title setting
const Title = ({ title }: Title) => {
  const pageTitle = `${title} - Sumentum`;
  return (
    <>
      <Head>
        <title>{title === "Main" ? "Sumentum" : pageTitle}</title>
      </Head>
    </>
  );
};

export default Title;
