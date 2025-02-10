import { Download } from "lucide-react"; // Install lucide-react if needed

export default function DownloadCV() {
  return (
    <div className="flex justify-center mt-6">
      <a
        href="/"
        download=""
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        <Download size={20} /> Download CV
      </a>
    </div>
  );
}
