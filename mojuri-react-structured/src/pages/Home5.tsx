import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="site-content" id="content" role="main">
<section class="section m-b-0">
<!-- Block Parallax -->
<div class="block block-parallax bg-img-1 bg-top-center">
<div class="section-container">
<div class="row">
<div class="col-md-6">
<div class="content">
<h2 class="title">Spring <br/>Collections</h2>
<div class="description">Brighten up your look with vibrant gemstone jewelry.</div>
<a class="button button-white button-outline thick-border button-arrow animation-horizontal" href="/shop-grid-left">Explore All</a>
</div>
</div>
<div class="col-md-6">
</div>
</div>
</div>
<div class="go-to-section">
<div class="go-to-button">
<a class="scroll-button" href="#section-2">Scroll Down</a>
</div>
<div class="go-to-text">
<a class="scroll-button" href="#section-2">Scroll Down</a>
</div>
</div>
</div>
</section>
<section class="section m-b-0" id="section-2">
<!-- Block Parallax -->
<div class="block block-parallax bg-img-2 right-text">
<div class="section-container">
<div class="row">
<div class="col-md-6">
</div>
<div class="col-md-6">
<div class="content">
<h2 class="title">Curated by <br/>Color</h2>
<div class="description">Introducing your outfit’s missing link.</div>
<a class="button button-white button-outline thick-border button-arrow animation-horizontal" href="/shop-grid-left">Explore All</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section m-b-0">
<!-- Block Parallax -->
<div class="block block-parallax bg-img-3 bg-top-center">
<div class="section-container">
<div class="row">
<div class="col-md-6">
<div class="content">
<h2 class="title">Make the <br/>Connection</h2>
<div class="description">Brighten up your look with vibrant gemstone jewelry.</div>
<a class="button button-white button-outline thick-border button-arrow animation-horizontal" href="/shop-grid-left">Explore All</a>
</div>
</div>
<div class="col-md-6">
</div>
</div>
</div>
</div>
</section>
<section class="section m-b-0">
<!-- Block Parallax -->
<div class="block block-parallax bg-img-4 right-text">
<div class="section-container">
<div class="row">
<div class="col-md-6">
</div>
<div class="col-md-6">
<div class="content">
<h2 class="title">Rings <br/>Collections</h2>
<div class="description">Introducing your outfit’s missing link.</div>
<a class="button button-white button-outline thick-border button-arrow animation-horizontal" href="/shop-grid-left">Explore All</a>
</div>
</div>
</div>
</div>
</div>
</section>
</div><!-- #content -->
</div><!-- #primary -->
</div><!-- #main-content -->
</div>
`

export default function Home5() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-index5" />
}
