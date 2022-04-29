import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export const DefaultLayout: React.VFC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex relative flex-col min-h-full bg-base-200">
      <Header />
      {children}
    </div>
  );
};

export const Header = () => {
  return (
    <div className="fixed z-10 justify-between w-full bg-transparent navbar">
      <NextLink href="/">
        <a className="text-xl normal-case btn btn-ghost drawer-button text-neutral-content">
          Devrypto
        </a>
      </NextLink>
      <button className="btn btn-square btn-ghost text-neutral-content">
        <AiOutlineMenu size="2rem" />
      </button>
    </div>
  );
};
