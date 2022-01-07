import type { NextPage } from "next";

import Brand from "../components/Brand";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Brand />
      <Hero />
    </div>
  );
};

export default Home;
