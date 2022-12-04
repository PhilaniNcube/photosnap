import Image from "next/image";
import Link from "next/link";
import BlackButton from "../components/BlackButton";

const Navbar = () => {

  const links =[
    {
      name: "Stories",
      href: "/stories",
    },
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ]

  return (
    <header className="bg-white px-4 py-3">
      <nav className="max-w-[1300px] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/shared/desktop/logo.svg"
            width={170}
            height={16}
            alt="logo"
            className="w-44 object-cover"
          />
        </Link>
        <ul className="hidden md:flex items-center space-x-3 text-black uppercase">
          {links.map((link, i) => (
            <Link href={link.href} key={i} className="text-md text-black font-bold">{link.name}</Link>
          ))}
        </ul>

        <BlackButton href="/pricing">Get An Invite</BlackButton>
      </nav>
    </header>
  );
};
export default Navbar;
