// src/pages/NewsletterPage.tsx
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import type { Article } from '../../data/articles'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

export default function NewsletterPage() {
  const articles = useSelector((state: RootState) => state.articles) as Article[]

  return (
    <div className="min-h-screen text-gray-900">
      <div className="max-w-screen-2xl mx-auto px-4 py-8 space-y-16">
            <NewsLetter centered />

          <section>
          <h2 className="text-2xl font-semibold mb-6">ٌRecent blog posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {articles.slice(0, 3).map(post => (

              <ArticleCard
                key={post.id}
                article={post}
                variant="default"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
