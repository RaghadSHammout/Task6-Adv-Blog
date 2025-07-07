import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50"
    >
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="w-16 h-16 text-purple-600 animate-spin" />
        <span className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
          Loading...
        </span>
      </div>
    </div>
  )
}
