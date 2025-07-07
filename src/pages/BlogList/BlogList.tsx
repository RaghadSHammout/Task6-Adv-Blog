import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import type { Article } from '../../data/articles'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { useOutletContext } from 'react-router-dom'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

interface ContextType {
  dark: boolean
}
export default function BlogLis() {
  const { dark } = useOutletContext<ContextType>()

  const articles = useSelector((s: RootState) => s.articles) as Article[]
  const recent = articles.slice(0, 4)
  const allPosts = articles.slice(4)

  const perPage = 6
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(allPosts.length / perPage)
  const pagePosts = allPosts.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="max-w-7xl mx-auto px-1 pt-20 text-gray-900">
      <h1
        className={`
    border-t-[3px] border-b-[2px] 
    text-[72px] md:text-[160px] lg:text-[243px]
    leading-none font-bold text-center mb-8
    ${dark ? 'text-white border-white' : 'text-gray-900 border-[#A8A8A8]'}`}>
        THE BLOG
      </h1>


      <h2 className={`text-2xl font-semibold mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}>Recent blog posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <div className="row-span-2">
          <ArticleCard article={recent[0]} variant="recentLarge" />
        </div>

        <ArticleCard article={recent[1]} variant="recentSmall" />
        <ArticleCard article={recent[2]} variant="recentSmall" />

        <ArticleCard article={recent[3]} variant="recentSmall" className="lg:col-span-2" />
      </div>

      <h2 className={`text-2xl font-semibold mb-6 ${dark ? 'text-white' : 'text-gray-900'} `}>All blog posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pagePosts.map(post => (
          <ArticleCard key={post.id} article={post} variant="default" />
        ))}
      </div>

      {/* PAGINATION */}
      <div
        className="
    flex flex-col md:flex-row justify-between items-center  space-y-4 md:space-y-0 border-t-[1px] pt-8 border-[#A8A8A8]
  "
      >
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="flex items-center gap-1 px-3 py-1 rounded text-[#747D90] disabled:text-gray-400 hover:bg-gray-200"
        >
          <FaLongArrowAltLeft />
          Previous
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`
          px-3 py-1 rounded-[8px]
          ${page === i + 1
                  ? 'bg-[#F9F5FF] text-[#7F56D9]'
                  : 'text-[#667085] hover:bg-gray-200'}
        `}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="flex items-center gap-1 px-3 py-1 rounded text-[#747D90] hover:bg-gray-200"
        >
          Next
          <FaLongArrowAltRight />
        </button>
      </div>

    </div>
  )
}

