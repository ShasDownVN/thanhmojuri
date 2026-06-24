import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="site-content" id="content" role="main">
<section class="section">
<!-- Block Sliders (Layout 2) -->
<div class="block block-sliders layout-2 auto-height nav-center">
<div class="slick-sliders" data-autoplay="true" data-columns="1" data-columns1="1" data-columns1440="1" data-columns2="1" data-columns3="1" data-columns4="1" data-dots="true" data-nav="true">
<div class="item slick-slide">
<div class="item-content">
<div class="content-image">
<img alt="Image Slider" height="1080" src="/media/slider/2-1.jpg" width="1920"/>
</div>
<div class="item-info horizontal-center vertical-middle text-center">
<div class="content">
<div class="subtitle-slider">TRANSPARENT. HONEST. REVOLUTIONARY.</div>
<h2 class="title-slider">Spring Collection</h2>
<a class="button button-slider button-black" href="/shop-grid-left">SHOP NOW</a>
</div>
</div>
</div>
</div>
<div class="item slick-slide">
<div class="item-content">
<div class="content-image">
<img alt="Image Slider" height="1080" src="/media/slider/2-2.jpg" width="1920"/>
</div>
<div class="item-info horizontal-center vertical-middle text-center">
<div class="content">
<div class="subtitle-slider">30% OFF ALL ORDER</div>
<h2 class="title-slider">New Arrivals</h2>
<a class="button button-slider button-black" href="/shop-grid-left">SHOP NOW</a>
</div>
</div>
</div>
</div>
<div class="item slick-slide">
<div class="item-content">
<div class="content-image">
<img alt="Image Slider" height="1080" src="/media/slider/2-3.jpg" width="1920"/>
</div>
<div class="item-info horizontal-center vertical-middle text-center">
<div class="content">
<div class="subtitle-slider">30% OFF ALL ORDER</div>
<h2 class="title-slider">Oh, Hello Newness!</h2>
<a class="button button-slider button-black" href="/shop-grid-left">SHOP NOW</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding m-b-70">
<div class="section-container">
<!-- Block Intro (Layout 2) -->
<div class="block block-intro layout-2 text-center">
<div class="block-widget-wrap">
<div class="intro-image animation-horizontal">
<img alt="" height="107" src="/media/banner/intro-2.png" width="120"/>
</div>
<h2 class="intro-title">
										 		MOJURI JEWERLY
											</h2>
<div class="intro-text">
												To provide the best designer jewelry at a reasonable price, while revolutionizing the jewelry industry with transparency and honesty.
											</div>
</div>
</div>
</div>
</section>
<section class="section section-padding m-b-70">
<div class="section-container">
<!-- Block Banners (Layout 3) -->
<div class="block block-banners layout-3 banners-effect">
<div class="block-widget-wrap">
<div class="row">
<div class="section-column left">
<div class="section-column-inner">
<div class="block-widget-banner layout-3">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="737" src="/media/banner/banner-2-1.jpg" width="527"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">Curated by color</h3>
<div class="banner-image-description">
																			 		Brighten up your look with vibrant gemstone jewelry.
																				</div>
<a class="button button-outline" href="/shop-grid-left">SHOP NOW</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="section-column right">
<div class="section-column-inner">
<div class="block-widget-banner layout-3">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="600" src="/media/banner/banner-2-2.jpg" width="527"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">Make the connection</h3>
<div class="banner-image-description">
																					Brighten up your look with vibrant gemstone jewelry.
																				</div>
<a class="button button-outline" href="/shop-grid-left">SHOP NOW</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="block-widget-banner layout-3">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="438" src="/media/banner/banner-2-3.jpg" width="411"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">Soak up the savings</h3>
<div class="banner-image-description">
																					Brighten up your look with vibrant gemstone jewelry.
																				</div>
<a class="button button-outline" href="/shop-grid-left">SHOP NOW</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding background-img bg-img-3 p-t-60 p-b-70 m-b-70">
<div class="section-container">
<!-- Block Products (Layout 2) -->
<div class="block block-products layout-2 slider">
<div class="block-widget-wrap">
<div class="block-title"><h2>Trending Products</h2></div>
<div class="block-content">
<div class="content-product-list slick-wrap">
<div class="slick-sliders products-list grid" data-columns="4" data-columns1="3" data-columns1440="4" data-columns2="2" data-columns3="2" data-columns4="1" data-dots="false" data-nav="1" data-slidestoscroll="true">
<div class="item-product slick-slide">
<div class="items">
<div class="products-entry clearfix product-wapper">
<div class="products-thumb">
<div class="product-lable">
<div class="hot">Hot</div>
</div>
<div class="product-thumb-hover">
<a href="/product">
<img alt="" class="post-image" height="600" src="/media/product/6.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/6-2.jpg" width="600"/>
</a>
</div>
<div class="product-button">
<div class="btn-add-to-cart" data-title="Add to cart">
<a class="product-btn button" href="#" rel="nofollow">Add to cart</a>
</div>
<div class="btn-wishlist" data-title="Wishlist">
<button class="product-btn">Add to wishlist</button>
</div>
<div class="btn-compare" data-title="Compare">
<button class="product-btn">Compare</button>
</div>
<span class="product-quickview" data-title="Quick View">
<a class="quickview quickview-button" href="#">Quick View <i class="icon-search"></i></a>
</span>
</div>
</div>
<div class="products-content">
<div class="contents">
<div class="rating">
<div class="star star-0"></div><span class="count">(0 review)</span>
</div>
<h3 class="product-title"><a href="/product">Medium Flat Hoops</a></h3>
<span class="price">$100.00</span>
</div>
</div>
</div>
</div>
</div>
<div class="item-product slick-slide">
<div class="items">
<div class="products-entry clearfix product-wapper">
<div class="products-thumb">
<div class="product-lable">
<div class="onsale">-10%</div>
<div class="hot">Hot</div>
</div>
<div class="product-thumb-hover">
<a href="/product">
<img alt="" class="post-image" height="600" src="/media/product/7.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/7-2.jpg" width="600"/>
</a>
</div>
<div class="product-button">
<div class="btn-add-to-cart" data-title="Add to cart">
<a class="product-btn button" href="#" rel="nofollow">Add to cart</a>
</div>
<div class="btn-wishlist" data-title="Wishlist">
<button class="product-btn">Add to wishlist</button>
</div>
<div class="btn-compare" data-title="Compare">
<button class="product-btn">Compare</button>
</div>
<span class="product-quickview" data-title="Quick View">
<a class="quickview quickview-button" href="#">Quick View <i class="icon-search"></i></a>
</span>
</div>
</div>
<div class="products-content">
<div class="contents">
<div class="rating">
<div class="star star-5"></div><span class="count">(1 review)</span>
</div>
<h3 class="product-title"><a href="/product">Bold Pearl Hoop Earrings</a></h3>
<span class="price">
<del aria-hidden="true"><span>$200.00</span></del>
<ins><span>$180.00</span></ins>
</span>
</div>
</div>
</div>
</div>
</div>
<div class="item-product slick-slide">
<div class="items">
<div class="products-entry clearfix product-wapper">
<div class="products-thumb">
<div class="product-lable">
<div class="hot">Hot</div>
</div>
<div class="product-thumb-hover">
<a href="/product">
<img alt="" class="post-image" height="600" src="/media/product/9.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/9-2.jpg" width="600"/>
</a>
</div>
<div class="product-button">
<div class="btn-add-to-cart" data-title="Add to cart">
<a class="product-btn button" href="#" rel="nofollow">Add to cart</a>
</div>
<div class="btn-wishlist" data-title="Wishlist">
<button class="product-btn">Add to wishlist</button>
</div>
<div class="btn-compare" data-title="Compare">
<button class="product-btn">Compare</button>
</div>
<span class="product-quickview" data-title="Quick View">
<a class="quickview quickview-button" href="#">Quick View <i class="icon-search"></i></a>
</span>
</div>
</div>
<div class="products-content">
<div class="contents">
<div class="rating">
<div class="star star-0"></div><span class="count">(0 review)</span>
</div>
<h3 class="product-title"><a href="/product">Twin Hoops</a></h3>
<span class="price">$150.00</span>
</div>
</div>
</div>
</div>
</div>
<div class="item-product slick-slide">
<div class="items">
<div class="products-entry clearfix product-wapper">
<div class="products-thumb">
<div class="product-lable">
<div class="onsale">-33%</div>
</div>
<div class="product-thumb-hover">
<a href="/product">
<img alt="" class="post-image" height="600" src="/media/product/10.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/10-2.jpg" width="600"/>
</a>
</div>
<div class="product-button">
<div class="btn-add-to-cart" data-title="Add to cart">
<a class="product-btn button" href="#" rel="nofollow">Add to cart</a>
</div>
<div class="btn-wishlist" data-title="Wishlist">
<button class="product-btn">Add to wishlist</button>
</div>
<div class="btn-compare" data-title="Compare">
<button class="product-btn">Compare</button>
</div>
<span class="product-quickview" data-title="Quick View">
<a class="quickview quickview-button" href="#">Quick View <i class="icon-search"></i></a>
</span>
</div>
</div>
<div class="products-content">
<div class="contents">
<div class="rating">
<div class="star star-4"></div><span class="count">(2 reviews)</span>
</div>
<h3 class="product-title"><a href="/product">Yilver And Turquoise Earrings</a></h3>
<span class="price">
<del aria-hidden="true"><span>$150.00</span></del>
<ins><span>$100.00</span></ins>
</span>
</div>
</div>
</div>
</div>
</div>
<div class="item-product slick-slide">
<div class="items">
<div class="products-entry clearfix product-wapper">
<div class="products-thumb">
<div class="product-lable">
<div class="onsale">-7%</div>
</div>
<div class="product-thumb-hover">
<a href="/product">
<img alt="" class="post-image" height="600" src="/media/product/11.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/11-2.jpg" width="600"/>
</a>
</div>
<div class="product-button">
<div class="btn-add-to-cart" data-title="Add to cart">
<a class="product-btn button" href="#" rel="nofollow">Add to cart</a>
</div>
<div class="btn-wishlist" data-title="Wishlist">
<button class="product-btn">Add to wishlist</button>
</div>
<div class="btn-compare" data-title="Compare">
<button class="product-btn">Compare</button>
</div>
<span class="product-quickview" data-title="Quick View">
<a class="quickview quickview-button" href="#">Quick View <i class="icon-search"></i></a>
</span>
</div>
<div class="product-stock">
<span class="stock">Out Of Stock</span>
</div>
</div>
<div class="products-content">
<div class="contents">
<div class="rating">
<div class="star star-5"></div><span class="count">(1 review)</span>
</div>
<h3 class="product-title"><a href="/product">Medium Flat Hoops</a></h3>
<span class="price">
<del aria-hidden="true"><span>$150.00</span></del>
<ins><span>$140.00</span></ins>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding m-b-70">
<div class="section-container">
<!-- Block Intro (Layout 3) -->
<div class="block block-intro layout-3">
<div class="block-widget-wrap">
<div class="row">
<div class="section-column left">
<div class="intro-wrap">
<h2 class="intro-title">Jewellery Online<br/> at the Most Affordable Price</h2>
<div class="intro-item">
															Behind our 15-year success is our panel of expert jewellers who have been scouring the entire globe in pursuit of the best and most stunning jewellery that can be offered at affordable price for you. 
														</div>
<div class="intro-item">
															Visit our online catalogue and shop for the finest earrings, rings, bracelets, watches, silver, and the most luxurious gemstones. 
														</div>
<div class="intro-btn">
<a class="button button-outline animation-horizontal" href="/shop-grid-left">Read more</a>
</div>
</div>
</div>
<div class="section-column right animation-horizontal hover-opacity">
<img alt="intro" height="498" src="/media/banner/intro-2.jpg" width="690"/>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding top-border p-t-70 m-b-70">
<div class="section-container">
<!-- Block Product Categories -->
<div class="block block-product-cats slider round-border">
<div class="block-widget-wrap">
<div class="block-title"><h2>Top Categories</h2></div>
<div class="block-content">
<div class="product-cats-list slick-wrap">
<div class="slick-sliders content-category" data-columns="5" data-columns1="5" data-columns1440="5" data-columns2="3" data-columns3="3" data-columns4="2" data-dots="0" data-nav="1" data-slidestoscroll="true">
<div class="item item-product-cat slick-slide">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Bracelets" height="258" src="/media/product/cat-1.jpg" width="258"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Bracelets</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat slick-slide">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Charms" height="258" src="/media/product/cat-2.jpg" width="258"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Charms</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat slick-slide">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Earrings" height="258" src="/media/product/cat-3.jpg" width="258"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Earrings</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat slick-slide">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Necklaces" height="258" src="/media/product/cat-4.jpg" width="258"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Necklaces</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat slick-slide">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Rings" height="258" src="/media/product/cat-5.jpg" width="258"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Rings</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat slick-slide">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Bracelets" height="258" src="/media/product/cat-1.jpg" width="258"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Bracelets</a>
</h2>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding top-border p-t-70 m-b-70">
<div class="section-container">
<!-- Block Testimonial -->
<div class="block block-testimonial layout-2">
<div class="block-widget-wrap">
<div class="block-title"><h2>Happy Clients Says</h2></div>
<div class="block-content">
<div class="testimonial-wrap slick-wrap">
<div class="slick-sliders" data-columns="3" data-columns1="2" data-columns2="1" data-columns3="1" data-columns4="1" data-dots="0" data-nav="1" data-slidestoscroll="true">
<div class="testimonial-content">
<div class="item">
<div class="testimonial-item">
<div class="testimonial-icon">
<div class="rating">
<div class="star star-5"></div>
</div>
</div>
<h2 class="testimonial-title">“Amazing piece of history”</h2>
<div class="testimonial-excerpt">
																		Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep... 
																	</div>
</div>
<div class="testimonial-image image-position-top">
<div class="thumbnail">
<img alt="" height="110" src="/media/testimonial/1.jpg" width="110"/>
</div>
<div class="testimonial-info">
<h2 class="testimonial-customer-name">Robet Smith</h2>
</div>
</div>
</div>
</div>
<div class="testimonial-content">
<div class="item">
<div class="testimonial-item">
<div class="testimonial-icon">
<div class="rating">
<div class="star star-4"></div>
</div>
</div>
<h2 class="testimonial-title">“Fabulous Grounds”</h2>
<div class="testimonial-excerpt">
																		Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep... 
																	</div>
</div>
<div class="testimonial-image image-position-top">
<div class="thumbnail">
<img alt="" height="110" src="/media/testimonial/2.jpg" width="110"/>
</div>
<div class="testimonial-info">
<h2 class="testimonial-customer-name">Saitama One</h2>
</div>
</div>
</div>
</div>
<div class="testimonial-content">
<div class="item">
<div class="testimonial-item">
<div class="testimonial-icon">
<div class="rating">
<div class="star star-5"></div>
</div>
</div>
<h2 class="testimonial-title">“Great vineyard tour and tasting!”</h2>
<div class="testimonial-excerpt">
																		Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep... 
																	</div>
</div>
<div class="testimonial-image image-position-top">
<div class="thumbnail">
<img alt="" height="110" src="/media/testimonial/3.jpg" width="110"/>
</div>
<div class="testimonial-info">
<h2 class="testimonial-customer-name">Sara Colinton</h2>
</div>
</div>
</div>
</div>
<div class="testimonial-content">
<div class="item">
<div class="testimonial-item">
<div class="testimonial-icon">
<div class="rating">
<div class="star star-5"></div>
</div>
</div>
<h2 class="testimonial-title">“Stunning Design”</h2>
<div class="testimonial-excerpt">
																		Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep... 
																	</div>
</div>
<div class="testimonial-image image-position-top">
<div class="thumbnail">
<img alt="" height="110" src="/media/testimonial/4.jpg" width="110"/>
</div>
<div class="testimonial-info">
<h2 class="testimonial-customer-name">Shetty Jamie</h2>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding top-border p-t-70 m-b-70">
<div class="section-container">
<!-- Block Newsletter (Layout 2) -->
<div class="block block-newsletter layout-2 one-col">
<div class="block-widget-wrap">
<div class="newsletter-title-wrap">
<h2 class="newsletter-title">Latest From MoJuri!</h2>
<div class="newsletter-text">Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</div>
</div>
<form action="#" class="newsletter-form" method="post">
<input name="your-email" placeholder="Email address" size="40" type="email" value=""/>
<span class="btn-submit">
<input type="submit" value="SUBSCRIBE"/>
</span>
</form>
</div>
</div>
</div>
</section>
<section class="section m-b-0">
<!-- Block Instagram -->
<div class="block block-instagram slider no-space">
<div class="slick-wrap">
<div class="slick-sliders fullwidth" data-columns="5" data-columns1="4" data-columns2="3" data-columns3="2" data-columns4="1" data-dots="false" data-item_row="1" data-nav="false">
<div class="item slick-slide">
<a class="instagram" href="#">
<img alt="Image Slider" height="450" src="/media/banner/instagram-1.jpg" width="450"/>
</a>
</div>
<div class="item slick-slide">
<a class="instagram" href="#">
<img alt="Image Slider" height="450" src="/media/banner/instagram-2.jpg" width="450"/>
</a>
</div>
<div class="item slick-slide">
<a class="instagram" href="#">
<img alt="Image Slider" height="450" src="/media/banner/instagram-3.jpg" width="450"/>
</a>
</div>
<div class="item slick-slide">
<a class="instagram" href="#">
<img alt="Image Slider" height="450" src="/media/banner/instagram-4.jpg" width="450"/>
</a>
</div>
<div class="item slick-slide">
<a class="instagram" href="#">
<img alt="Image Slider" height="450" src="/media/banner/instagram-5.jpg" width="450"/>
</a>
</div>
<div class="item slick-slide">
<a class="instagram" href="#">
<img alt="Image Slider" height="450" src="/media/banner/instagram-6.jpg" width="450"/>
</a>
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

export default function Home2() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-index2" />
}
