import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="page-title" id="title">
<div class="section-container">
<div class="content-title-heading">
<h1 class="text-title-heading">
										Wedding &amp; Bridal
									</h1>
</div>
<div class="breadcrumbs">
<a href="/">Home</a><span class="delimiter"></span>Wedding &amp; Bridal
								</div>
</div>
</div>
<div class="site-content" id="content" role="main">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="row">
<div class="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50">
<!-- Block Post Search -->
<div class="block block-post-search">
<div class="block-title"><h2>Search</h2></div>
<div class="block-content">
<form action="#" class="search-from" method="get">
<input class="s" name="s" placeholder="Search..." type="text" value=""/>
<button class="btn" type="submit">
<i class="icon-search"></i>
</button>
</form>
</div>
</div>
<!-- Block Post Categories -->
<div class="block block-post-cats">
<div class="block-title"><h2>Categories</h2></div>
<div class="block-content">
<div class="post-cats-list">
<ul>
<li>
<a href="/blog-grid-left">Bracelets <span class="count">9</span></a>
</li>
<li>
<a href="/blog-grid-left">Earrings <span class="count">4</span></a>
</li>
<li>
<a href="/blog-grid-left">Necklaces <span class="count">3</span></a>
</li>
<li>
<a href="/blog-grid-left">News <span class="count">6</span></a>
</li>
<li class="current">
<a href="/blog-grid-left">Wedding &amp; Bridal <span class="count">2</span></a>
</li>
</ul>
</div>
</div>
</div>
<!-- Block Posts -->
<div class="block block-posts">
<div class="block-title"><h2>Recent Posts</h2></div>
<div class="block-content">
<ul class="posts-list">
<li class="post-item">
<a class="post-image" href="/blog-detail-right">
<img src="/media/blog/1.jpg"/>
</a>
<div class="post-content">
<h2 class="post-title">
<a href="/blog-detail-right">
																		Bridial Fair Collections 2023
																	</a>
</h2>
<div class="post-time">
<span class="post-date">May 30, 2023</span>
</div>
</div>
</li>
<li class="post-item">
<a class="post-image" href="/blog-detail-right">
<img src="/media/blog/2.jpg"/>
</a>
<div class="post-content">
<h2 class="post-title">
<a href="/blog-detail-right">
																		Our Sterling Silver
																	</a>
</h2>
<div class="post-time">
<span class="post-date">Aug 24, 2023</span>
</div>
</div>
</li>
<li class="post-item">
<a class="post-image" href="/blog-detail-right">
<img src="/media/blog/3.jpg"/>
</a>
<div class="post-content">
<h2 class="post-title">
<a href="/blog-detail-right">
																		New Season Modern Gold Earrings
																	</a>
</h2>
<div class="post-time">
<span class="post-date">Dec 06, 2023</span>
</div>
</div>
</li>
</ul>
</div>
</div>
<!-- Block Post Archives -->
<div class="block block-post-archives">
<div class="block-title"><h2>Archives</h2></div>
<div class="block-content">
<div class="post-archives-list">
<ul>
<li>
<a href="/blog-grid-left">May 2023</a>
</li>
<li>
<a href="/blog-grid-left">April 2023</a>
</li>
<li>
<a href="/blog-grid-left">August 2022</a>
</li>
</ul>
</div>
</div>
</div>
<!-- Block Post Tags -->
<div class="block block-post-tags">
<div class="block-title"><h2>Tags</h2></div>
<div class="block-content">
<div class="post-tags-list">
<ul>
<li>
<a href="/blog-grid-left">Jewelry</a>
</li>
<li>
<a href="/blog-grid-left">Ring Styles</a>
</li>
<li>
<a href="/blog-grid-left">Gift Ideas</a>
</li>
<li>
<a href="/blog-grid-left">Wedding</a>
</li>
<li>
<a href="/blog-grid-left">Bracelets</a>
</li>
<li>
<a href="/blog-grid-left">Necklaces</a>
</li>
<li>
<a href="/blog-grid-left">Unique</a>
</li>
<li>
<a href="/blog-grid-left">Glossary</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="col-xl-9 col-lg-9 col-md-12 col-12">
<div class="posts-list grid">
<div class="row">
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/1.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Bridial Fair Collections 2023</a>
</h2>
<div class="post-meta">
<span class="post-time">July 24, 2023</span>
<span class="post-comment">1 Comment</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/2.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Our Sterling Silver</a>
</h2>
<div class="post-meta">
<span class="post-time">August 16, 2023</span>
<span class="post-comment">4 Comments</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/3.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">New Season Modern Gold Earrings</a>
</h2>
<div class="post-meta">
<span class="post-time">October 04, 2023</span>
<span class="post-comment">3 Comments</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/4.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Glossary of Jewelry Terms</a>
</h2>
<div class="post-meta">
<span class="post-time">October 20, 2023</span>
<span class="post-comment">1 Comment</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/5.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Unique First Anniversary Gift Ideas</a>
</h2>
<div class="post-meta">
<span class="post-time">December 11, 2023</span>
<span class="post-comment">5 Comments</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/6.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Hypoallergenic Wedding Bands</a>
</h2>
<div class="post-meta">
<span class="post-time">February 07, 2023</span>
<span class="post-comment">2 Comments</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/7.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Guide to Engagement Ring Styles</a>
</h2>
<div class="post-meta">
<span class="post-time">July 24, 2023</span>
<span class="post-comment">3 Comments</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/3.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Ultimate Guide To Women's Wedding Bands</a>
</h2>
<div class="post-meta">
<span class="post-time">July 24, 2023</span>
<span class="post-comment">1 Comment</span>
</div>
</div>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
<div class="post-entry clearfix post-wapper">
<div class="post-image">
<a href="/blog-detail-right">
<img alt="" src="/media/blog/1.jpg"/>
</a>
</div>
<div class="post-content">
<div class="post-categories">
<a href="/blog-grid-right">Wedding &amp; Bridal</a>
</div>
<h2 class="post-title">
<a href="/blog-detail-right">Wedding Planning Advice</a>
</h2>
<div class="post-meta">
<span class="post-time">July 24, 2023</span>
<span class="post-comment">5 Comments</span>
</div>
</div>
</div>
</div>
</div>
</div>
<nav class="pagination">
<ul class="page-numbers">
<li><a class="prev page-numbers" href="#">Previous</a></li>
<li><span aria-current="page" class="page-numbers current">1</span></li>
<li><a class="page-numbers" href="#">2</a></li>
<li><a class="page-numbers" href="#">3</a></li>
<li><a class="next page-numbers" href="#">Next</a></li>
</ul>
</nav>
</div>
</div>
</div>
</div>
</div><!-- #content -->
</div><!-- #primary -->
</div><!-- #main-content -->
</div>
`

export default function BlogGridLeft() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-blog-grid-left" />
}
