import Link from "next/link";

import Button from "./UI/Button";

function SnippetNotFound() {
  return (
    <div className="text-gray-500 md:text-lg text-center mt-48 flex flex-col items-center">
      <p className="leading-10">Snippet not found</p>
      <p>Seems like you have followed a broken link.</p>

      <Link href="/" passHref>
        <Button className="mt-6">Back to safety</Button>
      </Link>
    </div>
  );
}

export default SnippetNotFound;
