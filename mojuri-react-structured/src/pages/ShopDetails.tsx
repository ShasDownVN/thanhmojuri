import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="page-title" id="title">
<div class="section-container">
<div class="content-title-heading">
<h1 class="text-title-heading">Bora Armchair</h1>
</div>
<div class="breadcrumbs">
<a href="/">Home</a><span class="delimiter"></span><a href="/shop">Shop</a><span class="delimiter"></span>Bora Armchair
</div>
</div>
</div>
<div class="site-content" id="content" role="main">
<div class="shop-details zoom" data-product_layout_thumb="scroll" data-zoom_scroll="true" data-zoom_contain_lens="true" data-zoomtype="inner" data-lenssize="200" data-lensshape="square" data-bordersize="2" data-bordercolour="#f9b61e" data-popup="false">
<div class="product-top-info">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="row">
<div class="product-images col-lg-7 col-md-12 col-12">
<div class="row">
<div class="col-md-2">
<div class="content-thumbnail-scroll">
<div class="image-thumbnail slick-carousel slick-vertical" data-asnavfor=".image-additional" data-centermode="true" data-focusonselect="true" data-columns4="5" data-columns3="4" data-columns2="4" data-columns1="4" data-columns="4" data-nav="true" data-vertical="&quot;true&quot;" data-verticalswiping="&quot;true&quot;">
<div class="img-item slick-slide"><span class="img-thumbnail-scroll"><img alt="" height="600" src="/media/product/1.jpg" width="600"/></span></div>
<div class="img-item slick-slide"><span class="img-thumbnail-scroll"><img alt="" height="600" src="/media/product/1-2.jpg" width="600"/></span></div>
<div class="img-item slick-slide"><span class="img-thumbnail-scroll"><img alt="" height="600" src="/media/product/2.jpg" width="600"/></span></div>
<div class="img-item slick-slide"><span class="img-thumbnail-scroll"><img alt="" height="600" src="/media/product/2-2.jpg" width="600"/></span></div>
<div class="img-item slick-slide"><span class="img-thumbnail-scroll"><img alt="" height="600" src="/media/product/3.jpg" width="600"/></span></div>
</div>
</div>
</div>
<div class="col-md-10">
<div class="scroll-image main-image">
<div class="image-additional slick-carousel" data-asnavfor=".image-thumbnail" data-fade="true" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns="1" data-nav="true">
<div class="img-item slick-slide"><img alt="" height="900" src="/media/product/1.jpg" title="" width="900"/></div>
<div class="img-item slick-slide"><img alt="" height="900" src="/media/product/1-2.jpg" title="" width="900"/></div>
<div class="img-item slick-slide"><img alt="" height="900" src="/media/product/2.jpg" title="" width="900"/></div>
<div class="img-item slick-slide"><img alt="" height="900" src="/media/product/2-2.jpg" title="" width="900"/></div>
<div class="img-item slick-slide"><img alt="" height="900" src="/media/product/3.jpg" title="" width="900"/></div>
</div>
</div>
</div>
</div>
</div>
<div class="product-info col-lg-5 col-md-12 col-12">
<h1 class="title">Bora Armchair</h1>
<span class="price"><del aria-hidden="true"><span>$100.00</span></del> <ins><span>$90.00</span></ins></span>
<div class="rating">
<div class="star star-5"></div>
<div class="review-count">(3<span> reviews</span>)</div>
</div>
<div class="description">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div class="variations">
<table cellspacing="0">
<tbody>
<tr>
<td class="label">Size</td>
<td class="attributes"><ul class="text"><li><span>L</span></li><li><span>M</span></li><li><span>S</span></li></ul></td>
</tr>
<tr>
<td class="label">Color</td>
<td class="attributes"><ul class="colors"><li><span class="color-1"></span></li><li><span class="color-2"></span></li><li><span class="color-3"></span></li></ul></td>
</tr>
</tbody>
</table>
</div>
<div class="buttons">
<div class="add-to-cart-wrap">
<div class="quantity">
<button class="plus" type="button">+</button>
<input autocomplete="off" class="qty" inputmode="numeric" max="" min="0" name="quantity" placeholder="" size="4" step="1" title="Qty" type="number" value="1"/>
<button class="minus" type="button">-</button>
</div>
<div class="btn-add-to-cart"><a href="#" tabindex="0">Add to cart</a></div>
</div>
<div class="btn-quick-buy" data-title="Wishlist"><button class="product-btn">Buy It Now</button></div>
<div class="btn-wishlist" data-title="Wishlist"><button class="product-btn">Add to wishlist</button></div>
<div class="btn-compare" data-title="Compare"><button class="product-btn">Compare</button></div>
</div>
<div class="product-meta">
<span class="sku-wrapper">SKU: <span class="sku">D2300-3-2-2</span></span>
<span class="posted-in">Category: <a href="/shop" rel="tag">Bracelets</a></span>
<span class="tagged-as">Tags: <a href="/shop" rel="tag">Hot</a>, <a href="/shop" rel="tag">Trend</a></span>
</div>
<div class="social-share">
<a class="share-facebook" href="#" title="Facebook"><i class="fa fa-facebook"></i>Facebook</a>
<a class="share-twitter" href="#" title="Twitter"><i class="fa fa-twitter"></i>Twitter</a>
<a class="share-pinterest" href="#" title="Pinterest"><i class="fa fa-pinterest"></i>Pinterest</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="product-tabs">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="product-tabs-wrap">
<ul class="nav nav-tabs" role="tablist">
<li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a></li>
<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#additional-information" role="tab">Additional information</a></li>
<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a></li>
</ul>
<div class="tab-content">
<div class="tab-pane fade show active" id="description" role="tabpanel">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
</div>
<div class="tab-pane fade" id="additional-information" role="tabpanel">
<table class="product-attributes"><tbody><tr class="attribute-item"><th class="attribute-label">Color</th><td class="attribute-value">Antique, Chestnut, Grullo</td></tr></tbody></table>
</div>
<div class="tab-pane fade" id="reviews" role="tabpanel">
<div class="product-reviews" id="reviews">
<div id="comments">
<h2 class="reviews-title">1 review for <span>Bora Armchair</span></h2>
<ol class="comment-list">
<li class="review">
<div class="content-comment-container">
<div class="comment-container">
<img alt="" class="avatar" height="60" src="/media/user.jpg" width="60"/>
<div class="comment-text"><div class="rating small"><div class="star star-5"></div></div><div class="review-author">Peter Capidal</div><div class="review-time">January 12, 2023</div></div>
</div>
<div class="description"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.</p></div>
</div>
</li>
</ol>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="related products">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="block-title"><h2>Related products</h2></div>
<div class="products-list grid">
<div class="row">
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6"><div class="products-entry clearfix product-wapper"><div class="products-thumb"><div class="product-thumb-hover"><a href="/product"><img alt="" class="post-image" height="600" src="/media/product/3.jpg" width="600"/><img alt="" class="hover-image back" height="600" src="/media/product/3-2.jpg" width="600"/></a></div></div><div class="products-content"><div class="contents text-center"><h3 class="product-title"><a href="/product">Twin Hoops</a></h3><div class="rating"><div class="star star-4"></div></div><span class="price">$150.00</span></div></div></div></div>
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6"><div class="products-entry clearfix product-wapper"><div class="products-thumb"><div class="product-thumb-hover"><a href="/product"><img alt="" class="post-image" height="600" src="/media/product/1.jpg" width="600"/><img alt="" class="hover-image back" height="600" src="/media/product/1-2.jpg" width="600"/></a></div></div><div class="products-content"><div class="contents text-center"><h3 class="product-title"><a href="/product">Medium Flat Hoops</a></h3><div class="rating"><div class="star star-5"></div></div><span class="price"><del aria-hidden="true"><span>$150.00</span></del> <ins><span>$100.00</span></ins></span></div></div></div></div>
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6"><div class="products-entry clearfix product-wapper"><div class="products-thumb"><div class="product-thumb-hover"><a href="/product"><img alt="" class="post-image" height="600" src="/media/product/2.jpg" width="600"/><img alt="" class="hover-image back" height="600" src="/media/product/2-2.jpg" width="600"/></a></div></div><div class="products-content"><div class="contents text-center"><h3 class="product-title"><a href="/product">Bold Pearl Hoop Earrings</a></h3><div class="rating"><div class="star star-0"></div></div><span class="price">$200.00</span></div></div></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
`

export default function ShopDetails() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-shop-details" />
}
