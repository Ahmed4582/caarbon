import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-bounce text-6xl font-bold text-[#b68d33]">
          404
        </div>
        <h1 className="text-4xl font-bold mt-4">Oops! Page not found.</h1>
        <p className="text-gray-500 mt-2">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-6 animate-pulse">
          <Link
            to="/"
            className="bg-[#b68d33] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
