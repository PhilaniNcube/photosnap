import Link from "next/link";
import { ReactNode } from "react";

type AppProps = {
  children: ReactNode;
  href: string;
}

const BlackButton = ({children, href}:AppProps) => {
  return (
    <button className="bg-black hover:bg-slate-300 px-6 py-2 text-white hover:text-black duration-300 transition-all uppercase">
      <Link href={href}>{children}</Link>
    </button>
  );
};
export default BlackButton;
