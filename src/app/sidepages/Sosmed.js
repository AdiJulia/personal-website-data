import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function Sosmed() {
  return (
    <>
      {/* LINKEDIN */}

      <div className="rounded-full gap-x-0.5">
        <a
          href="https://www.linkedin.com/in/adijulias"
          className="text-gray-600 hover:text-ds_blue mr-0 transition-colors duration-200"
          target="_blank"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <svg
            className="w-8 h-8 m-1.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <FaLinkedin className="w-5 h-5 m-1.5" />
          </svg>
        </a>
      </div>

      {/* GITHUB */}

      <div className="rounded-full gap-x-0.5">
        <a
          href="https://github.com/AdiJulia/"
          className="text-gray-600 hover:text-ds_blue mr-0 transition-colors duration-200"
          target="_blank"
          title="GitHub"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 m-1.5 "
            viewBox="0 0 20 20"
          >
            <FaGithub className="w-5 h-5 m-1.5" />
          </svg>
        </a>
      </div>

      {/* MEDIUM */}

      <div className="rounded-full gap-x-0.5">
        <a
          href="https://medium.com/@adijulias"
          className="text-gray-600 hover:text-ds_blue mr-0 transition-colors duration-200"
          target="_blank"
          title="Medium"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 m-1.5 "
            viewBox="0 0 20 20"
          >
            <FaMedium className="w-5 h-5 m-1.5" />
          </svg>
        </a>
      </div>

      {/* INSTAGRAM */}

      <div className="rounded-full gap-x-0.5">
        <a
          href="https://www.instagram.com/adijulia_s/"
          className="text-gray-600 hover:text-ds_blue mr-0 transition-colors duration-200"
          target="_blank"
          title="Instagram"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 m-1.5 "
            viewBox="0 0 20 20"
          >
            <FaInstagram className="w-5 h-5 m-1.5" />
          </svg>
        </a>
      </div>

      {/* RESUME */}

      <div className="rounded-full gap-x-0.5">
        <a
          href="CV Adi Julia.pdf"
          className="text-gray-600 hover:text-ds_blue mr-0 transition-colors duration-200 btn-download"
          target="_blank"
          title="Resume"
          rel="noopener noreferrer"
          id="downloadBtn"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 m-1.5 "
            viewBox="0 0 20 20"
          >
            <FaFileAlt className="w-5 h-5 m-1.5" />
          </svg>
        </a>
      </div>

      {/* GMAIL */}

      <div className="rounded-full gap-x-0.5">
        <a
          href="mailto:adiadijulia@gmail.com"
          className="text-gray-600 hover:text-ds_blue mr-0 transition-colors duration-200"
          title="Email"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 m-1.5 "
            viewBox="0 0 20 20"
          >
            <FaEnvelope className="w-5 h-5 m-1.5" />
          </svg>
        </a>
      </div>
    </>
  );
}
