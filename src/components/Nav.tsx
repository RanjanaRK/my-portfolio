import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { SunDim } from "lucide-react";
import Link from "next/link";
import DarkMode from "./DarkMode";
// import Darkmode from "./Darkmode";

const Nav = () => {
  return (
    <>
      <Navbar
        // height={"3rem"}
        isBordered={true}
        isBlurred
        className="border backdrop-blur-md">
        <NavbarBrand>
          <Link
            href={"/"}
            className="text-lg font-bold">
            Ranjana Kumari
          </Link>
        </NavbarBrand>
        <NavbarContent
          className="hidden gap-4 font-semibold sm:flex"
          justify="center">
          <NavbarItem>
            <Link
              href="/"
              aria-current="page"
              className="hover:text-blue-500">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#skills"
              className="hover:text-blue-500">
              Skill
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#projects"
              className="hover:text-blue-500">
              projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#contact"
              className="hover:text-blue-500">
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
            <DarkMode />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu className="items-center">
          <NavbarMenuItem>
            <Link
              href="#about"
              aria-current="page">
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="#about"
              aria-current="page">
              Skill
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="#about"
              aria-current="page">
              projects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="#about"
              aria-current="page">
              contact
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
