import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const ContactLinks = () => {
  return (
    <div className=" text-black flex flex-col h-full justify-between gap-3">
      <Link
        href="https://github.com/joel-danjuma"
        className="hover:text-orange-500 w-3 h-3"
      >
        <FiGithub />
      </Link>
      <Link
        href="https://twitter.com/joeldanjuma_"
        className="hover:text-orange-500 w-3 h-3"
      >
        <FiTwitter />
      </Link>
      <Link
        href="https://www.linkedin.com/in/joel-danjuma/"
        className="hover:text-orange-500 w-3 h-3"
      >
        <FiLinkedin />
      </Link>
      <Link
        href="mailto:leojjad@gmail.com"
        className="hover:text-orange-500 w-3 h-3"
      >
        <AiOutlineMail />
      </Link>
    </div>
  );
};

export default ContactLinks;
