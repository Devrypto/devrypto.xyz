import { HeroBackGround } from "@/components/Hero/HeroBackground";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="relative z-0 pb-16 w-full text-neutral-content">
      <HeroBackGround />
      <div className="flex-col mt-16 sm:mx-24 hero-content">
        <div className="w-full text-center lg:py-10 lg:text-left">
          <h1 className="font-bebas text-5xl font-extrabold sm:py-4 lg:text-7xl">
            Devrypto
          </h1>
          <p className="font-bebas text-2xl font-extrabold lg:text-3xl">
            {`We're moving forward. Come on.`}
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center w-full">
          <button className="shadow btn btn-primary shadow-primary">
            Join Discord
          </button>
          <span className="text-lg font-bold">OR</span>
          <button className="shadow btn btn-secondary shadow-secondary">
            About us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
