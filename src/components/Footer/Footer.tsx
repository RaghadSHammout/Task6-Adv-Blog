
export default function Footer() {
  return (
    <footer className=" dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap  items-center font-[20px] gap-3.5 text-sm text-[#C0C5D0]">
          <span>© 2023</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="hover:underline">
            Email
          </a>
          <a href="#" className="hover:underline">
            RSS feed
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Add to Feedly
          </a>
        </div>
      </div>
    </footer>
  )
}
