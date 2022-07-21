import Logo from "@/assets/logo.svg";
import IconHamburger from "@/assets/icon-hamburger.svg";
import IconClose from "@/assets/icon-close.svg";
import { useState } from "react";
import { ActionLink } from "@/components/buttons/action-link/action-link";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="ctn mt-10 flex items-center justify-between xl:mt-14">
      <a href="/#" aria-label="Homepage">
        <img src={Logo} alt="" />
      </a>
      <div
        className={`${
          open ? "fixed top-10 w-full left-0 flex justify-end ctn z-[99]" : ""
        } xl:hidden`}
      >
        <button aria-label="toggle menu" onClick={() => setOpen((prev) => !prev)}>
          <img src={open ? IconClose : IconHamburger} alt="" />
        </button>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`${open ? "sidebar-backdrop" : "hidden"} xl:hidden`}
      ></div>
      <ul
        className={`${
          open ? "top-[6.3125rem] transition-all" : "top-[-100vh]"
        } fixed w-[min(87.2%,20.3125rem)] right-[6.4%] bg-neutral-50 z-[99] py-10 flex flex-col items-center
           gap-6 rounded  shadow-md text-neutral-800 font-bold
          xl:static xl:p-0 xl:w-auto xl:bg-none xl:flex-row xl:shadow-none xl:font-medium xl:gap-8 xl:text-[0.9375rem]
          xl:[&_a:hover]:opacity-50
          `}
      >
        <li>
          <a href="/#">Pricing</a>
        </li>
        <li>
          <a href="/#">Product</a>
        </li>
        <li>
          <a href="/#">About Us</a>
        </li>
        <li>
          <a href="/#">Careers</a>
        </li>
        <li>
          <a href="/#">Community</a>
        </li>
      </ul>

      <div className="hidden xl:block">
        <ActionLink href="/#">Get Started</ActionLink>
      </div>
    </nav>
  );
};
