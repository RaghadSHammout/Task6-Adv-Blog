import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6">
      <div className="p-6 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Text */}
      <h1 className="mt-8 text-6xl font-extrabold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        We can’t seem to find the page you’re looking for. It might have been moved
        or deleted.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Go Back Home
      </Link>
    </div>
  )
}
