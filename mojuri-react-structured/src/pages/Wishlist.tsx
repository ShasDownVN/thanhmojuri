import HtmlBlock from '../components/HtmlBlock'

const pageHtml = `
<div class="site-main" id="site-main">
<div class="main-content" id="main-content">
<div class="content-area" id="primary">
<div class="page-title" id="title">
<div class="section-container">
<div class="content-title-heading">
<h1 class="text-title-heading">
										Wishlist
									</h1>
</div>
<div class="breadcrumbs">
<a href="/">Home</a><span class="delimiter"></span><a href="/shop-grid-left">Shop</a><span class="delimiter"></span>Shopping Cart
								</div>
</div>
</div>
<div class="site-content" id="content" role="main">
<div class="section-padding">
<div class="section-container p-l-r">
<div class="shop-wishlist">
<table class="wishlist-items">
<tbody>
<tr class="wishlist-item">
<td class="wishlist-item-remove"><span></span></td>
<td class="wishlist-item-image">
<a href="/product">
<img alt="" height="600" src="/media/product/3.jpg" width="600"/>
</a>
</td>
<td class="wishlist-item-info">
<div class="wishlist-item-name">
<a href="/product">Twin Hoops</a>
</div>
<div class="wishlist-item-price">
<span>$150.00</span>
</div>
<div class="wishlist-item-time">June 6, 2022</div>
</td>
<td class="wishlist-item-actions">
<div class="wishlist-item-stock">
															In stock                                    
														</div>
<div class="wishlist-item-add">
<div class="btn-add-to-cart" data-title="Add to cart">
<a class="product-btn" href="#" rel="nofollow">Add to cart</a>
</div>
</div>
</td>
</tr>
<tr class="wishlist-item">
<td class="wishlist-item-remove"><span></span></td>
<td class="wishlist-item-image">
<a href="/product">
<img alt="" height="600" src="/media/product/4.jpg" width="600"/>
</a>
</td>
<td class="wishlist-item-info">
<div class="wishlist-item-name">
<a href="/product">Yilver And Turquoise Earrings</a>
</div>
<div class="wishlist-item-price">
<del aria-hidden="true"><span>$150.00</span></del>
<ins><span>$100.00</span></ins>
</div>
<div class="wishlist-item-time">June 6, 2022</div>
</td>
<td class="wishlist-item-actions">
<div class="wishlist-item-stock">
															In stock                                    
														</div>
<div class="wishlist-item-add">
<div class="btn-add-to-cart" data-title="Add to cart">
<a class="product-btn" href="#" rel="nofollow">Add to cart</a>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div><!-- #content -->
</div><!-- #primary -->
</div><!-- #main-content -->
</div>
`

export default function Wishlist() {
  return <HtmlBlock html={pageHtml} className="mojuri-page mojuri-shop-wishlist" />
}
