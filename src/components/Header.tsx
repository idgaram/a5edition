import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavbarSeparator from "./ui/NavbarSeparator";
import { buttonVariants } from "./ui/button";

const Header = () => {
  const user = undefined;
  // const isAdmin = false;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 lg:w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/">
            <Image
              src="/logo_a5.png"
              alt="logo of the site"
              className="py-2 px-2"
              // layout="responsive"
              width={80}
              height={50}
            />
          </Link>
          <div className="hidden sm:flex items-center justify-between space-x-4 ">
            <Link href="/">Accueil</Link>
            <NavbarSeparator />
            <Link href="/store">Publications</Link>
            <NavbarSeparator />
            <Link href="/blog">Chroniques</Link>
          </div>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Déconnexion
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={`${buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })} bg-blue-300 `}
                >
                  S&quot;inscrire
                </Link>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "secondary",
                  })}
                >
                  Connexion
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Header;
