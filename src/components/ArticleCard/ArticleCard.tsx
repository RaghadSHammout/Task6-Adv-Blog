import { Link, useOutletContext } from 'react-router-dom'
import type { Article } from '../../data/articles'
import { MdArrowOutward } from "react-icons/md";


type Variant = 'default' | 'recentLarge' | 'recentSmall'

interface ArticleCardProps {
  article: Article
  variant?: Variant
  className?: string
}
interface ContextType {
  dark: boolean
}
export default function ArticleCard({ article, variant = 'default', className = '', }: ArticleCardProps) {
  const wrapperClasses = `block  rounded-lg hover:shadow-lg transition-shadow ${className}`


  let imgClasses = 'w-full h-48 object-cover'
  if (variant === 'recentSmall') {
    imgClasses = 'w-full h-48 object-cover md:w-1/2'
  }

  const layoutClasses = variant === 'recentSmall' ? 'flex flex-col md:flex-row' : ''
  const contentWrapperClasses = variant === 'recentSmall' ? 'p-4 md:flex-1' : 'p-4'
  const { dark } = useOutletContext<ContextType>()

  return (
    <Link to={`/post/${article.id}`} className={`${wrapperClasses} ${layoutClasses}`}>
      <img
        src={article.mainImage}
        alt={article.title}
        className={imgClasses}
      />

      <div className={contentWrapperClasses}>
        <p className="text-sm text-[#6941C6] font-[600]">
          {article.author} · {article.date}
        </p>

        <h3 className={`${dark ? 'text-white' : 'text-gray-900'} variant === 'recentSmall'? 'text-lg font-medium mt-1': 'text-xl  mt-1 flex justify-between ' `
        }>
          {article.title}
          <MdArrowOutward />

        </h3>

        <p className={`text-gray-600 mt-2 text-sm ${dark ? 'text-[#C0C5D0]' : 'text-gray-900'}`}>
          {article.excerpt}
        </p>

        <div className="mt-3 flex flex-wrap gap-2 font-medium">
          {article.categories.map(cat => (
            <span
              key={cat.name}
              className={`text-sm ${cat.bgClass} ${cat.textClass} rounded-2xl px-2.5 py-0.5`}
            >
              {cat.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
