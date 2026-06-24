import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'

export default function BlogList() {
  const { data: blogsResponse } = useQuery({
    queryKey: ['blogs'],
    queryFn: api.getBlogs,
  })
  const blogs = blogsResponse?.data ?? []

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <h1 className="text-title-heading">Jewelry Blog</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>Blog
          </div>
        </div>
      </section>

      <section className="section-padding section-container p-l-r">
        <div className="posts-list grid">
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={blog.id}>
                <article className="post-entry clearfix post-wapper dynamic-card">
                  <div className="post-image">
                    <a href={`/blog/${blog.slug}`}>
                      <img alt={blog.title} src={blog.coverImage} />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-categories">{blog.category}</div>
                    <h2 className="post-title">
                      <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                    </h2>
                    <div className="post-meta">
                      <span className="post-time">{new Date(blog.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <p>{blog.excerpt}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
