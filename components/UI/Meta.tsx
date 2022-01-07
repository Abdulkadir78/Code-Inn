import Head from "next/head";

interface HeadProps {
  title?: string;
}

const Meta: React.FunctionComponent<HeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title ? `Code Inn - ${title}` : "Code Inn"}</title>
      <meta
        name="description"
        content="Code Inn is a hotel for your code snippets. Create a snippet and share it with a click"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
