import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/navbar/navlink";

const NavBar = () => {
  return (
    <nav className="fixed top-0 bg-white z-20 w-full shadow-sm ">
      <div className="max-w-screen mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={49} priority />
        </Link>
        <NavLink />
      </div>
    </nav>
  );
};
export default NavBar;
