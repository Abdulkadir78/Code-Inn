import { doc, getDoc } from "firebase/firestore/lite";
import { GetServerSideProps } from "next";

import { db } from "../../firebase/firebase";
import { SnippetProps } from "../../TS-models/models";
import SnippetById from "../../components/SnippetById";

const ById: React.FunctionComponent<SnippetProps> = ({
  snippetId,
  snippetName,
  snippet,
  theme,
  language,
  showLineNumbers,
}) => {
  return (
    <SnippetById
      snippetId={snippetId}
      snippetName={snippetName}
      snippet={snippet}
      theme={theme}
      language={language}
      showLineNumbers={showLineNumbers}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const docRef = doc(db, "snippets", `${context.params?.id}`);
  const snippetDoc = await getDoc(docRef);

  const data = snippetDoc.data();
  if (data) {
    var { name, snippet, theme, language, showLineNumbers } = data;
  }

  return {
    props: {
      snippetId: docRef?.id,
      snippetName: name || null,
      snippet: snippet || null,
      theme: theme || null,
      language: language || null,
      showLineNumbers: showLineNumbers || null,
    },
  };
};

export default ById;
