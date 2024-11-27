import type { NextPage } from "next";

import Brand from "../components/Brand";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Brand />
      <Hero />
    </div>
  );
};

export default Home;
