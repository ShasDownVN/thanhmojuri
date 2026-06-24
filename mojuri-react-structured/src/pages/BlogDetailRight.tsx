import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="page-title" id="title">
<div class="section-container">
<div class="content-title-heading">
<h1 class="text-title-heading">
										Bridial Fair Collections 2023
									</h1>
</div>
<div class="breadcrumbs">
<a href="/">Home</a><span class="delimiter"></span>Bridial Fair Collections 2023
								</div>
</div>
</div>
<div class="site-content" id="content" role="main">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="row">
<div class="col-xl-9 col-lg-9 col-md-12 col-12 md-b-30">
<div class="post-details">
<div class="post-image">
<img alt="" src="/media/blog/1.jpg"/>
</div>
<h2 class="post-title">
													Bridial Fair Collections 2023
												</h2>
<div class="post-meta">
<span class="post-categories"><i class="icon_folder-alt"></i> <a href="/blog-grid-right">Wedding &amp; Bridal</a></span>
<span class="post-time"><i class="icon_clock_alt"></i> July 24, 2023</span>
<span class="post-comment"><i class="icon_comment_alt"></i> 1 Comment</span>
</div>
<div class="post-content clearfix">
<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
<p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
<blockquote><p><i class="icon-straight-quotes"></i>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote>
<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
<p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
<div class="content-img">
<img alt="" height="460" src="/media/blog/details.jpg" width="1410"/>
</div>
</div>
<div class="post-content-entry">
<div class="tags-links">
<label>Tags :</label> <a href="/blog-grid-right" rel="tag">Wedding</a> <a href="/blog-grid-right" rel="tag">Glossary</a>
</div>
<div class="entry-social-share">
<label>Share :</label>
<div class="social-share">
<a class="share-facebook" href="#" target="_blank" title="Facebook"><i class="fa fa-facebook"></i>Facebook</a>
<a class="share-twitter" href="#" title="Twitter"><i class="fa fa-twitter"></i>Twitter</a>
<a class="share-pinterest" href="#" title="Pinterest"><i class="fa fa-pinterest"></i>Pinterest</a>
</div>
</div>
</div>
<div class="prev-next-post">
<div class="previous-post">
<a href="/blog-detail-right" rel="prev">
<div class="hover-extend active"><span>Previous</span></div>
<h2 class="title">Our Sterling Silver</h2>
</a>
</div>
<div class="next-post">
<a href="/blog-detail-right" rel="next">
<div class="hover-extend active"><span>Next</span></div>
<h2 class="title">New Season Modern Gold Earrings</h2>
</a>
</div>
</div>
<div class="comments-area" id="comments">
<h3 class="comments-title">1 Comment</h3>
<div class="comments-list">
<div class="comment-item">
<div class="comment-avatar">
<img alt="" class="avatar" height="70" src="/media/user.jpg" width="70"/>
</div>
<div class="comment-content-wrap">
<h3 class="comment-author">
																	Peter Capidal					
																</h3>
<div class="comment-time">
																	June 15, 2023
																</div>
<div class="comment-content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
</div>
<a class="comment-reply-link" href="#">Reply</a>
</div>
</div>
</div>
<div class="comment-form">
<div class="form-header">
<h3>Leave a Reply</h3>
</div>
<form action="#" class="row" method="post" novalidate="">
<div class="comment-notes col-md-12 col-sm-12">Your email address will not be published.</div>
<div class="form-group col-md-12 col-sm-12">
<textarea aria-required="true" class="form-control" cols="45" id="comment" name="comment" placeholder="Comment" rows="8"></textarea>
</div>
<div class="form-group col-md-6 col-sm-6">
<input class="form-control" id="author" name="author" placeholder="Your Name *" size="30" type="text" value=""/>
</div>
<div class="form-group col-md-6 col-sm-6">
<input class="form-control" id="email" name="email" placeholder="Your Email *" size="30" type="text" value=""/>
</div>
<div class="form-group col-md-12 col-sm-12">
<input class="form-control" id="url" name="url" placeholder="Website" size="30" type="text" value=""/>
</div>
<div class="form-group col-md-12">
<input class="button button-outline border-black" id="submit" name="submit" type="submit" value="Post Comment"/>
</div>
</form>
</div>
</div>
</div>
</div>
<div class="col-xl-3 col-lg-3 col-md-12 col-12 sidebar right-sidebar">
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
<a href="/blog-grid-left">August 2023</a>
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
</div>
</div>
</div>
</div><!-- #content -->
</div><!-- #primary -->
</div><!-- #main-content -->
</div>
`

export default function BlogDetailRight() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-blog-details-right" />
}
