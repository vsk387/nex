import Link from "next/link";

//links contains all the pages of the app and its href- links and its label- what you want to call it in navbar
const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/prisma-example", label: "prisma" },
];

/*
link href='/' for homepage, ul list for rest of the pages 
flex-col means column navbar by default but sm: flex-row navbar becomes row when in small screen
navbar add in div className is from DaisyUI as well
div tag below nav tag for more customization purposes, nav tag can be alone as well
*/
const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-6 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>

        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            // uses map to iterate
            return (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
