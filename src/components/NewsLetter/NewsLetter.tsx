// src/components/NewsLetter/NewsLetter.tsx
import { Link, useOutletContext } from 'react-router-dom'

interface NewsLetterProps {
  centered?: boolean
}

interface ContextType {
  dark: boolean
}

export default function NewsLetter({ centered = false }: NewsLetterProps) {
      const { dark } = useOutletContext<ContextType>()

  if (centered) {
    return (
      <div className="w-full max-w-2xl mx-auto pt-16 space-y-6 text-center">
        <p className="text-sm font-semibold text-purple-600 uppercase">
          Newsletters
        </p>
        <h2 className={`text-3xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>Stories and interviews</h2>
        <p className={`${dark ? 'text-white' : 'text-gray-900'} `}>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 max-w-md border rounded px-4 py-2 focus:outline-none focus:ring"
          />
          <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500">
          We care about your data in our{' '}
          <Link to="#" className="underline">
            privacy policy
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 min-[834px]:grid-cols-3 pt-16">
      <div className="min-[834px]:col-start-2 min-[834px]:col-span-2 space-y-6 text-center">
        <p className="text-sm font-semibold text-purple-600 uppercase">
          Newsletters
        </p>
        <h2 className="text-3xl font-bold">Stories and interviews</h2>
        <p className="text-gray-600">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 max-w-md border rounded px-4 py-2 focus:outline-none focus:ring"
          />
          <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500">
          We care about your data in our{' '}
          <Link to="#" className="underline">
            privacy policy
          </Link>
        </p>
      </div>
    </div>
  )
}
