import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function DownloadCV() {
  return (
    <div className="flex text-center w-full items-center justify-center md:justify-start xl:justify-start mt-4">
      <Link
        href="/Ajay_FullStack_Developer_Resume.pdf"
        download="Ajay_FullStack_Developer_Resume.pdf"
        className="mt-3 w-3/4 md:w-[200px] xl:w-[200px] text-md text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
      >
        <FaDownload />
        Download CV
      </Link>
    </div>
  );
}
