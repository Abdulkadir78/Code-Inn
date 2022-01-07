import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { addDoc } from "firebase/firestore/lite";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { snippetsCollection } from "../firebase/firebase";
import Button from "./UI/Button";
import Alert from "./UI/Alert";
import Dropdown from "./UI/Dropdown";
import Checkbox from "./UI/Checkbox";

const languages = SyntaxHighlighter.supportedLanguages;

function AddSnippet() {
  const router = useRouter();
  const [theme, setTheme] = useState<string>(Object.values(themes)[0]);
  const [language, setLanguage] = useState(languages[0]);
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  const [error, setError] = useState("");
  const [snippet, setSnippet] = useState("");
  const snippetHeadingRef = useRef<HTMLInputElement>(null);

  const handleSnippetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSnippet(e.target.value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(themes[e.target.value]);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleToggleLineNumbers = () => {
    setShowLineNumbers((prevState) => !prevState);
  };

  const handleSubmit = async () => {
    if (!snippet?.trim()) {
      setError("Cannot add an empty snippet");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const docRef = await addDoc(snippetsCollection, {
      name: snippetHeadingRef.current?.value,
      snippet,
      theme,
      language,
      showLineNumbers,
    });
    router.push(`/snippets/${docRef.id}`);
  };

  const resetError = () => {
    setError("");
  };

  return (
    <div className="mt-20 mb-10">
      <h1 className="text-3xl md:text-4xl">Create a Snippet</h1>
      {error && (
        <Alert
          type="error"
          message={error}
          onClose={resetError}
          className="w-full lg:w-10/12 xl:w-9/12"
        />
      )}

      <input
        type="text"
        placeholder="Name your snippet"
        className="block border-2 w-full lg:w-10/12 xl:w-9/12 mt-7 p-4 border-slate-300 rounded-md"
        ref={snippetHeadingRef}
      />
      <textarea
        rows={12}
        placeholder="Paste your snippet here"
        className="resize-none border-2 w-full lg:w-10/12  xl:w-9/12 mt-5 p-4 border-slate-300 rounded-md"
        onChange={handleSnippetChange}
      />

      <h6 className="mt-5 mb-2 text-primary font-medium text-lg">Preview</h6>

      <div className="flex flex-col sm:flex-row sm:gap-10">
        <Dropdown
          label="Theme"
          options={Object.keys(themes)}
          onChange={handleThemeChange}
          className="my-2 sm:my-5"
        />
        <Dropdown
          label="Language"
          options={languages}
          onChange={handleLanguageChange}
          className="mt-4 sm:my-5"
        />
        <Checkbox
          label="Show line numbers"
          className="my-7 sm:my-0 sm:mt-6"
          onChange={handleToggleLineNumbers}
          checked={showLineNumbers}
        />
      </div>

      <div className="border-2 p-3 w-full lg:w-10/12 xl:w-9/12 border-slate-300 rounded-md">
        <SyntaxHighlighter
          language={language}
          style={theme}
          showLineNumbers={showLineNumbers}
          className="h-96"
        >
          {snippet}
        </SyntaxHighlighter>
      </div>

      <Button className="mt-8 px-8" onClick={handleSubmit}>
        Create
      </Button>
    </div>
  );
}

export default AddSnippet;
