import Link from "next/link";

import DisplayLottie from "./DisplayLottie";
import Button from "./UI/Button";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="md:w-10/12">
        <div className="mt-24 lg:mt-32 flex text-3xl md:text-5xl xl:text-6xl font-medium">
          <h1>Copy</h1>
          <span className="text-primary">.</span>
          <h1>Paste</h1>
          <span className="text-primary">.</span>
          <h1>Share</h1>
        </div>

        <p className="mt-7 lg:mt-11">
          <span className="text-primary font-semibold">Code Inn </span>
          is a hotel for your code snippets. Simply create a snippet and we will
          generate a url for you to share it with your friends. With support for
          more than a dozen of themes and languages, Code Inn makes your code
          snippets look beautiful.
        </p>

        <Link href="/snippets/create" passHref>
          <Button className="mt-10 py-4">Create a snippet</Button>
        </Link>
      </div>

      <div className="mt-5 sm:-mt-5 lg:mt-10 xl:-mt-5 lg:ml-10">
        <DisplayLottie path="/lotties/code-animation.json" />
      </div>
    </div>
  );
}

export default Hero;
