import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'

export default function BlogDetail() {
  const { slug = 'choose-everyday-jewelry' } = useParams()
  const { data: blogResponse } = useQuery({
    queryKey: ['blog', slug],
    queryFn: () => api.getBlog(slug),
  })
  const blog = blogResponse?.data
  const recent = blogResponse?.recent ?? []

  if (!blog) return <main className="section-padding section-container">Loading post...</main>

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <h1 className="text-title-heading">{blog.title}</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>{blog.title}
          </div>
        </div>
      </section>

      <section className="section-padding section-container p-l-r blog-detail-layout">
        <article className="post-details">
          <div className="post-image">
            <img alt={blog.title} src={blog.coverImage} />
          </div>
          <h2 className="post-title">{blog.title}</h2>
          <div className="post-meta">
            <span>{blog.category}</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="post-content clearfix" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>

        <aside className="recent-posts-widget">
          <h3>Recent Posts</h3>
          {recent.map((post) => (
            <a href={`/blog/${post.slug}`} key={post.id}>
              <img alt={post.title} src={post.coverImage} />
              <span>{post.title}</span>
            </a>
          ))}
        </aside>
      </section>
    </main>
  )
}
