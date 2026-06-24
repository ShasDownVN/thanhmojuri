import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="site-content" id="content" role="main">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="page-404">
<div class="content-page-404">
<div class="title-error">
												404		
											</div>
<div class="sub-title">
												Oops! That page can't be found.		
											</div>
<div class="sub-error">
												We're really sorry but we can't seem to find the page you were looking for.		
											</div>
<a class="button" href="/">
												Back The Homepage		
											</a>
</div>
</div>
</div>
</div>
</div><!-- #content -->
</div><!-- #primary -->
</div><!-- #main-content -->
</div>
`

export default function Page404() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-page-404" />
}
