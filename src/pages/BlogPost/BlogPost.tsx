import { useOutletContext, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import type { Article } from '../../data/articles'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
interface ContextType {
  dark: boolean
}
export default function BlogPost() {
        const { dark } = useOutletContext<ContextType>()

  const { id } = useParams<{ id: string }>()
  const articles = useSelector((s: RootState) => s.articles) as Article[]
  const article = articles.find(a => a.id === id)
  const recent = articles.slice(0, 6)

  if (!article) {
    return (
      <div className="font-[50px] max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
        The article is not available
      </div> 
    )
  }

  return (
    <div className="max-w-full mx-auto px-4 pt-[60px]  text-gray-900 space-y-16">
      <div className="grid grid-cols-1 min-[834px]:grid-cols-3 gap-8">
        <section className="order-1 min-[834px]:order-2 min-[834px]:col-span-2 space-y-12">
          <header className="space-y-4">
            <p className="text-sm text-[#6941C6] font-[600]">
              {article.author} , {article.date}
            </p>
            <h2 className={`text-4xl min-[834px]:text-5xl font-bold ${dark ? 'text-white' : 'text-gray-900'}  `}>
              {article.title}
            </h2>
            
          </header>

          <div className="w-full h-64 min-[834px]:h-[400px] overflow-hidden rounded-lg">
            
            <img
              src={article.mainImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className='text-[#667085] leading-relaxed'>{article.description}</p>


          <div className="space-y-12">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <img
                  src={sec.image}
                  alt={`section-${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-[#667085] leading-relaxed">{sec.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="order-2 min-[834px]:order-1 space-y-6">
          <h2 className="text-xl font-semibold">Recent blog posts</h2>
          {recent.map(post => (
            <ArticleCard
              key={post.id}
              article={post}
              variant="default"
            />
          ))}
        </section>
      </div>

      <NewsLetter/>
    </div>
  )
}
