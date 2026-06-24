import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="site-content" id="content" role="main">
<section class="section m-b-70">
<!-- Block Sliders -->
<div class="block block-sliders auto-height color-primary nav-center">
<div class="slick-sliders" data-autoplay="true" data-columns="1" data-columns1="1" data-columns1440="1" data-columns2="1" data-columns3="1" data-columns4="1" data-dots="true" data-nav="true">
<div class="item slick-slide">
<div class="item-content">
<div class="content-image">
<img alt="Image Slider" height="986" src="/media/slider/6-1.jpg" width="1920"/>
</div>
<div class="item-info horizontal-start vertical-middle">
<div class="content">
<h2 class="title-slider">Exquisite style for <br/>everyday wear.</h2>
<a class="button-slider button button-primary padding-large" href="/shop-grid-left">Shop Now</a>
</div>
</div>
</div>
</div>
<div class="item slick-slide">
<div class="item-content">
<div class="content-image">
<img alt="Image Slider" height="986" src="/media/slider/6-2.jpg" width="1920"/>
</div>
<div class="item-info horizontal-start vertical-middle">
<div class="content">
<h2 class="title-slider">Discover the<br/> Best of the Best</h2>
<a class="button-slider button button-primary padding-large" href="/shop-grid-left">Shop Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding">
<div class="section-container">
<!-- Block Product Categories (Layout 4) -->
<div class="block block-product-cats slider layout-4">
<div class="block-widget-wrap">
<div class="row">
<div class="col-md-4">
<div class="text-wrap">
<div class="sub-title">Find Your Favourites</div>
<h2 class="title">Add to your jewellery <br/>wardrobe</h2>
<a class="button button-outline border-black thick-border animation-horizontal" href="/shop-grid-left">All Categories</a>
</div>
</div>
<div class="col-md-8">
<div class="product-cats-list slick-wrap">
<div class="slick-sliders content-category" data-columns="3" data-columns1="3" data-columns1440="3" data-columns2="2" data-columns3="2" data-columns4="1" data-dots="0" data-nav="0" data-slidestoscroll="true">
<div class="slick-item slick-slide">
<div class="item item-product-cat">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Bracelets" height="224" src="/media/product/cat-6-1.jpg" width="298"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Bracelets</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Charms" height="224" src="/media/product/cat-6-2.jpg" width="298"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Charms</a>
</h2>
</div>
</div>
</div>
</div>
<div class="slick-item slick-slide">
<div class="item item-product-cat">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Earrings" height="224" src="/media/product/cat-6-3.jpg" width="298"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Earrings</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Necklaces" height="224" src="/media/product/cat-6-4.jpg" width="298"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Necklaces</a>
</h2>
</div>
</div>
</div>
</div>
<div class="slick-item slick-slide">
<div class="item item-product-cat">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Rings" height="224" src="/media/product/cat-6-5.jpg" width="298"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Rings</a>
</h2>
</div>
</div>
</div>
<div class="item item-product-cat">
<div class="item-product-cat-content">
<a href="/shop-grid-left">
<div class="item-image animation-horizontal">
<img alt="Rings" height="224" src="/media/product/cat-6-6.jpg" width="298"/>
</div>
</a>
<div class="product-cat-content-info">
<h2 class="item-title">
<a href="/shop-grid-left">Rings</a>
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
</div>
</div>
</section>
<section class="section section-padding top-border p-t-70 m-b-70">
<div class="section-container">
<!-- Block Banners (Layout 5) -->
<div class="block block-banners layout-5 banners-effect">
<div class="block-widget-wrap">
<div class="block-title">
<h2>Everyday Elegance</h2>
</div>
<div class="block-content">
<div class="row">
<div class="col-md-4 sm-m-b-40">
<div class="block-widget-banner">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="371" src="/media/banner/banner-6-1.jpg" width="450"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">EAR STACK MAGIC</h3>
<div class="banner-image-description">
																	 		 		Fusce egestas elit eget lorem n hac habitasse platea dictumstn hac habitasse
																				</div>
<a class="button" href="/shop-grid-left">Shop Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-md-4 sm-m-b-40">
<div class="block-widget-banner">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="371" src="/media/banner/banner-6-2.jpg" width="450"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">THE LOCKET</h3>
<div class="banner-image-description">
														 		 		 			Fusce egestas elit eget lorem n hac habitasse platea dictumstn hac habitasse
																				</div>
<a class="button" href="/shop-grid-left">Shop Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-md-4">
<div class="block-widget-banner">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="371" src="/media/banner/banner-6-3.jpg" width="450"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">AWARENESS BRACELET</h3>
<div class="banner-image-description">
														 		 		 			Fusce egestas elit eget lorem n hac habitasse platea dictumstn hac habitasse
																				</div>
<a class="button" href="/shop-grid-left">Shop Now</a>
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
<section class="section section-padding top-border p-t-70 m-b-70">
<div class="section-container">
<!-- Block Products (Layout 2) -->
<div class="block block-products layout-2 border-item slider">
<div class="block-widget-wrap">
<div class="block-title"><h2>New Arrivals</h2></div>
<div class="block-content">
<div class="content-product-list slick-wrap">
<div class="slick-sliders products-list grid" data-columns="4" data-columns1="3" data-columns1440="4" data-columns2="3" data-columns3="2" data-columns4="1" data-dots="false" data-nav="1" data-slidestoscroll="true">
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
<section class="section background-img bg-img-3 m-b-70">
<!-- Block Lookbook (Layout 2) -->
<div class="block block-lookbook layout-2">
<div class="lookbook-item">
<div class="row">
<div class="col-md-6 col-image">
<div class="lookbook-container">
<div class="lookbook-content">
<div class="item">
<img alt="Look Book 1" height="623" src="/media/banner/lookbook-6-1.jpg" width="959"/>
<div class="item-lookbook" style="left:52.97%;top:22.31%">
<span class="number-lookbook">1</span>
<div class="content-lookbook" style="right:35px; top:10px;">
<div class="item-thumb">
<a href="/product">
<img alt="" height="1000" src="/media/product/1.jpg" width="1000"/>
</a>
</div>
<div class="content-lookbook-bottom">
<div class="item-title">
<a href="/product">Medium Flat Hoops</a>
</div>
<span class="price">
<del aria-hidden="true"><span>$150.00</span></del>
<ins><span>$100.00</span></ins>
</span>
</div>
</div>
</div>
<div class="item-lookbook" style="left:68.3%;top:70.95%">
<span class="number-lookbook">1</span>
<div class="content-lookbook" style="right:35px;bottom:10px;">
<div class="item-thumb">
<a href="/product">
<img alt="" height="1000" src="/media/product/2.jpg" width="1000"/>
</a>
</div>
<div class="content-lookbook-bottom">
<div class="item-title">
<a href="/product">Bold Pearl Hoop Earrings</a>
</div>
<span class="price">
<del aria-hidden="true"><span>$240.00</span></del>
<ins><span>$200.00</span></ins>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-md-6 col-text">
<div class="lookbook-intro-wrap position-center">
<div class="lookbook-intro">
<div class="sub-title">Discover This Week's In Australia</div>
<h2 class="title">Spring Jewellery<br/> Favourites</h2>
<a class="button button-outline border-black thick-border animation-horizontal" href="/shop-grid-left">SHOP COLLECTION</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="section section-padding m-b-70">
<div class="section-container">
<!-- Block Testimonial -->
<div class="block block-testimonial layout-2">
<div class="block-widget-wrap">
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
</section>
<section class="section section-padding top-border p-t-70 m-b-70">
<div class="section-container">
<!-- Block Products (Layout 2) -->
<div class="block block-products layout-2 border-item slider">
<div class="block-widget-wrap">
<div class="block-title"><h2>Trending Product</h2></div>
<div class="block-content">
<div class="content-product-list slick-wrap">
<div class="slick-sliders products-list grid" data-columns="4" data-columns1="3" data-columns1440="4" data-columns2="3" data-columns3="2" data-columns4="1" data-dots="false" data-nav="1" data-slidestoscroll="true">
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
<section class="section section-padding top-border p-t-60 m-b-80">
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

export default function Home6() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-index6" />
}
