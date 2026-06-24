import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="site-content" id="content" role="main">
<section class="section m-b-70">
<!-- Block Banners (Layout 6) -->
<div class="block block-banners layout-6 no-space">
<div class="row">
<div class="col-md-6 sm-m-b-15">
<div class="block-widget-banner">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="730" src="/media/banner/banner-7-1.jpg" width="960"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">New arrivals</h3>
<a class="button button-outline border-white thick-border" href="/shop-grid-left">Shop Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-md-6">
<div class="block-widget-banner">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="730" src="/media/banner/banner-7-2.jpg" width="960"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">Best Seller</h3>
<a class="button button-outline border-white thick-border" href="/shop-grid-left">Shop Now</a>
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
<div class="section-container large">
<!-- Block Products -->
<div class="block block-products slider">
<div class="block-widget-wrap">
<div class="block-title"><h2>Shop The Latest</h2></div>
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
<img alt="" class="post-image" height="600" src="/media/product/1.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/1-2.jpg" width="600"/>
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
<img alt="" class="post-image" height="600" src="/media/product/2.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/2-2.jpg" width="600"/>
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
<img alt="" class="post-image" height="600" src="/media/product/3.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/3-2.jpg" width="600"/>
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
<img alt="" class="post-image" height="600" src="/media/product/4.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/4-2.jpg" width="600"/>
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
<img alt="" class="post-image" height="600" src="/media/product/13.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/13-2.jpg" width="600"/>
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
<div class="section-container large">
<!-- Block Banners (Layout 7) -->
<div class="block block-banners layout-7 banners-effect">
<div class="block-widget-wrap">
<div class="row">
<div class="col-md-4 sm-m-b-40">
<div class="block-widget-banner">
<div class="bg-banner">
<div class="banner-wrapper banners">
<div class="banner-image">
<a href="/shop-grid-left">
<img alt="Banner Image" height="654" src="/media/banner/banner-7-3.jpg" width="567"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">NEW // EARRINGS</h3>
<div class="banner-image-description">
																 		 		Ut varius tincidunt libero. Nullam nulla eros, ultricies sit amet, nonummy idpede metus. Vestibulum dapibus nunc ac augue
																			</div>
<a class="button button-outline border-black" href="/shop-grid-left">Shop Now</a>
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
<img alt="Banner Image" height="654" src="/media/banner/banner-7-4.jpg" width="567"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">JEWELLERY FAVOURITES</h3>
<div class="banner-image-description">
													 		 		 			Ut varius tincidunt libero. Nullam nulla eros, ultricies sit amet, nonummy idpede metus. Vestibulum dapibus nunc ac augue
																			</div>
<a class="button button-outline border-black" href="/shop-grid-left">Shop Now</a>
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
<img alt="Banner Image" height="654" src="/media/banner/banner-7-5.jpg" width="567"/>
</a>
</div>
<div class="banner-wrapper-infor">
<div class="info">
<div class="content">
<h3 class="title-banner">AWARENESS BRACELET</h3>
<div class="banner-image-description">
													 		 		 			Ut varius tincidunt libero. Nullam nulla eros, ultricies sit amet, nonummy idpede metus. Vestibulum dapibus nunc ac augue
																			</div>
<a class="button button-outline border-black" href="/shop-grid-left">Shop Now</a>
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
<section class="section m-b-70">
<!-- Block Lookbook -->
<div class="block block-lookbook">
<div class="lookbook-item">
<div class="lookbook-container">
<div class="lookbook-content">
<div class="item">
<img alt="Look Book 1" src="/media/banner/lookbook-7-1.jpg"/>
<div class="item-lookbook" style="left:63.65%;top:62.01%">
<span class="number-lookbook">1</span>
<div class="content-lookbook" style="right:33px;bottom:10px;">
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
<div class="item-lookbook" style="left:49.17%;top:20.78%">
<span class="number-lookbook">1</span>
<div class="content-lookbook" style="left:33px;top:10px;">
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
<ins><span>$230.00</span></ins>
</span>
</div>
</div>
</div>
<div class="item-lookbook" style="left:35.36%;top:84.42%">
<span class="number-lookbook">1</span>
<div class="content-lookbook" style="left:33px;bottom:10px;">
<div class="item-thumb">
<a href="/product">
<img alt="" height="1000" src="/media/product/3.jpg" width="1000"/>
</a>
</div>
<div class="content-lookbook-bottom">
<div class="item-title">
<a href="/product">Twin Hoops</a>
</div>
<span class="price">
<del aria-hidden="true"><span>$180.00</span></del>
<ins><span>$160.00</span></ins>
</span>
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
<div class="section-container large">
<!-- Block Products -->
<div class="block block-products slider">
<div class="block-widget-wrap">
<div class="block-title"><h2>Recommended For You</h2></div>
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
<img alt="" class="post-image" height="600" src="/media/product/13.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/13-2.jpg" width="600"/>
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
<h3 class="product-title"><a href="/product">Les Textured Hoops</a></h3>
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
<img alt="" class="post-image" height="600" src="/media/product/14.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/14-2.jpg" width="600"/>
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
<h3 class="product-title"><a href="/product">Oversized Thin Hoops</a></h3>
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
<img alt="" class="post-image" height="600" src="/media/product/15.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/15-2.jpg" width="600"/>
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
<h3 class="product-title"><a href="/product">Bold Hoops</a></h3>
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
<img alt="" class="post-image" height="600" src="/media/product/16.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/16-2.jpg" width="600"/>
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
<h3 class="product-title"><a href="/product">Organic Pearl Stacked Hoops</a></h3>
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
<img alt="" class="post-image" height="600" src="/media/product/1.jpg" width="600"/>
<img alt="" class="hover-image back" height="600" src="/media/product/1-2.jpg" width="600"/>
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
<div class="star star-0"></div><span class="count">(0 review)</span>
</div>
<h3 class="product-title"><a href="/product">Diamond Celestial Studs</a></h3>
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
<section class="section section-padding background-img bg-img-3 p-t-70 p-b-80 m-b-0">
<div class="section-container">
<!-- Block Testimonial -->
<div class="block block-testimonial layout-1">
<div class="block-widget-wrap">
<div class="testimonial-wrap slick-wrap">
<div class="slick-sliders" data-columns="1" data-columns1="1" data-columns2="1" data-columns3="1" data-columns4="1" data-dots="1" data-nav="0" data-slidestoscroll="true">
<div class="testimonial-content">
<div class="item">
<div class="testimonial-item">
<div class="testimonial-icon">
<span class="icon-straight-quotes"></span>
<div class="rating">
<div class="star star-5"></div>
</div>
</div>
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
<span class="icon-straight-quotes"></span>
<div class="rating">
<div class="star star-4"></div>
</div>
</div>
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
<span class="icon-straight-quotes"></span>
<div class="rating">
<div class="star star-5"></div>
</div>
</div>
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
<span class="icon-straight-quotes"></span>
<div class="rating">
<div class="star star-5"></div>
</div>
</div>
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
<section class="section section-padding p-t-10 p-b-10 m-b-0">
<div class="section-container">
<!-- Block Image -->
<div class="block block-image slider">
<div class="block-widget-wrap">
<div class="slick-wrap">
<div class="slick-sliders" data-columns="5" data-columns1="4" data-columns1440="4" data-columns2="3" data-columns3="2" data-columns4="1" data-nav="0">
<div class="item slick-slide">
<div class="item-image animation-horizontal">
<a href="#">
<img alt="Brand 1" height="450" src="/media/brand/1.jpg" width="450"/>
</a>
</div>
</div>
<div class="item slick-slide">
<div class="item-image animation-horizontal">
<a href="#">
<img alt="Brand 2" height="450" src="/media/brand/2.jpg" width="450"/>
</a>
</div>
</div>
<div class="item slick-slide">
<div class="item-image animation-horizontal">
<a href="#">
<img alt="Brand 3" height="450" src="/media/brand/3.jpg" width="450"/>
</a>
</div>
</div>
<div class="item slick-slide">
<div class="item-image animation-horizontal">
<a href="#">
<img alt="Brand 4" height="450" src="/media/brand/4.jpg" width="450"/>
</a>
</div>
</div>
<div class="item slick-slide">
<div class="item-image animation-horizontal">
<a href="#">
<img alt="Brand 5" height="450" src="/media/brand/5.jpg" width="450"/>
</a>
</div>
</div>
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

export default function Home7() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-index7" />
}
