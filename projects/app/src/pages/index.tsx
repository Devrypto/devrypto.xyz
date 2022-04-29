import { HeroBackGround } from "@/components/Hero/HeroBackground";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative z-0 w-full h-96">
      <HeroBackGround />
    </div>
  );
};

export default Home;
