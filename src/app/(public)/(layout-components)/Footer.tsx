import HashLink from "@/components/HashLink";
import Logo from "@/components/Logo";
import { FaHeart } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full flex flex-col bg-base-200 border-t-2 border-base-300">
    <div className="flex flex-row flex-wrap justify-center w-full gap-12 md:gap-x-16 lg:gap-x-28 xl:gap-x-40 2xl:gap-52 p-12">
      <div className="flex flex-col justify-center items-center"><Logo href={'/'} /></div>

      <nav className="flex flex-row flex-wrap justify-between gap-12 md:gap-16 lg:gap-28 xl:gap-40 2xl:gap-52">
        <div className="links flex flex-col">
          <h6><b>Company</b></h6>
          <HashLink href="">About us</HashLink>
          <HashLink href="">Contact</HashLink>
          <HashLink href="">Careers</HashLink>
          <HashLink href="">Press Kit</HashLink>
        </div>

        <div className="links flex flex-col">
          <h6><b>Legal</b></h6>
          <HashLink href="">Terms of Use</HashLink>
          <HashLink href="">Privacy Policy</HashLink>
          <HashLink href="">Cookie Policy</HashLink>
          <HashLink href="">Tax Policy</HashLink>
        </div>

        <div className="links flex flex-col">
          <h6><b>Services</b></h6>
          <HashLink href="">Service Status</HashLink>
          <HashLink href="">Billing</HashLink>
        </div>
      </nav>
    </div>

    <div className="flex flex-col w-full px-4 py-3 items-start bg-base-300 gap-2">
      <small className="flex flex-row flex-wrap items-center">Made with<FaHeart className="text-neutral mx-1.5 min-h-3.5 min-w-3.5"/>by Elaina. &copy; Copyright {`${new Date().getFullYear()}`}, PinkCloud Studios LLC.</small>
    </div>
  </footer>
);

export default Footer;