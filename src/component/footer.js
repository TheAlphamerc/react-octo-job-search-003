import "../App.css";

import {
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer(props) {
  return (
    <div className=" bg-white dark:bg-cardColor  sticky bottom-0 border-t dark:border-gray-700 py-3 flex flex-row-reverse ">
      <div className="px-5 text-white dark:text-gray-300 text-2xl space-x-8 ">
        <a href="https://github.com/TheAlphamerc">
          <FaGithub className="inline w-6 h-6  text-gray-600 dark:text-gray-200  hover:text-primary dark:hover:text-primary" />
        </a>
        <a href="https://twitter.com/thealphamerc">
          <FaTwitter className="inline w-6 h-6  text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
        </a>
        <a href="https://www.linkedin.com/in/thealphamerc/">
          <FaLinkedinIn className="inline w-6 h-6  text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
        </a>
        <a href="http://facebook.com/thealphamerc">
          <FaFacebookF className="inline w-6 h-6  text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
        </a>
        <a href="https://dev.to/thealphamerc">
          <FaGlobe className="inline w-6 h-6  text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-primary" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
