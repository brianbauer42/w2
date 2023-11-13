import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="p-2">
        This template created by{" "}
        <a
          className="text-blue-700 text-lg"
          href="https://github.com/brianbauer42"
        >
          Brian Bauer
        </a>
      </p>
      <Link to={`/`}>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back to Root Page
        </button>
      </Link>
    </div>
  );
}
