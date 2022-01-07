import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import Link from "next/link";

import { SnippetProps } from "../TS-models/models";
import Brand from "./Brand";
import Meta from "./UI/Meta";
import Alert from "./UI/Alert";
import HomeBtn from "./HomeBtn";
import Button from "./UI/Button";
import SnippetNotFound from "./SnippetNotFound";

const SnippetById: React.FunctionComponent<SnippetProps> = ({
  snippetId,
  snippetName,
  snippet,
  theme,
  language,
  showLineNumbers,
}) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isSnippetCopied, setIsSnippetCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    setIsLinkCopied(true);
  };

  const handleCopySnippet = () => {
    setIsSnippetCopied(true);
  };

  const onLinkAlertClose = () => {
    setIsLinkCopied(false);
  };

  const onSnippetAlertClose = () => {
    setIsSnippetCopied(false);
  };

  return (
    <>
      <Meta title={snippetName || snippetId} />
      <div className="container mb-5">
        <Brand />
        {snippet ? (
          <div className="mt-14">
            <HomeBtn />

            {isLinkCopied && (
              <Alert
                type="success"
                message="Link copied to clipboard"
                className="w-full xl:w-9/12"
                onClose={onLinkAlertClose}
              />
            )}

            {isSnippetCopied && (
              <Alert
                type="success"
                message="Snippet copied to clipboard"
                className="w-full xl:w-9/12"
                onClose={onSnippetAlertClose}
              />
            )}

            <h1 className="mt-7 pb-2 text-3xl md:text-4xl w-full sm:w-[70%] truncate">
              Snippet &quot;{snippetName || snippetId}&quot;
            </h1>

            <div className="flex flex-col sm:flex-row mt-5">
              <CopyToClipboard text={snippet} onCopy={handleCopySnippet}>
                <Button outlined className="mb-2">
                  Copy Snippet
                </Button>
              </CopyToClipboard>

              <CopyToClipboard text={pageUrl} onCopy={handleCopyLink}>
                <Button className="my-2 sm:mt-0 sm:ml-5">Copy link</Button>
              </CopyToClipboard>
            </div>

            <div className="border-2 mt-5 px-3 py-1 w-full xl:w-9/12 border-slate-300 rounded-md">
              <SyntaxHighlighter
                language={language}
                style={theme}
                showLineNumbers={showLineNumbers}
                className="max-h-screen"
              >
                {snippet}
              </SyntaxHighlighter>
            </div>
          </div>
        ) : (
          <SnippetNotFound />
        )}
      </div>
    </>
  );
};

export default SnippetById;
