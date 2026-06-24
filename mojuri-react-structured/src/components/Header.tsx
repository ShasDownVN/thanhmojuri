import HtmlBlock from "./HtmlBlock";
import { useAuthStore } from "../stores/authStore";

const headerHtml = `
<header class="site-header header-v1" id="site-header">
<div class="header-mobile">
<div class="section-padding">
<div class="section-container">
<div class="row">
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
<div class="navbar-header">
<button class="navbar-toggle" id="show-megamenu" type="button"></button>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
<div class="site-logo">
<a href="/">
<img alt="Mojuri – Jewelry Store HTML Template" height="79" src="/media/logo.png" width="400"/>
</a>
</div>
</div>
<div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
<div class="mojuri-topcart dropdown">
<div class="dropdown mini-cart top-cart">
<div class="remove-cart-shadow"></div>
<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle cart-icon" data-toggle="dropdown" href="#" role="button">
<div class="icons-cart"><i class="icon-large-paper-bag"></i><span class="cart-count">2</span></div>
</a>
<div class="dropdown-menu cart-popup">
<div class="cart-empty-wrap">
<ul class="cart-list">
<li class="empty">
<span>No products in the cart.</span>
<a class="go-shop" href="/shop">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></a>
</li>
</ul>
</div>
<div class="cart-list-wrap">
<ul class="cart-list">
<li class="mini-cart-item">
<a class="remove" href="#" title="Remove this item"><i class="icon_close"></i></a>
<a class="product-image" href="/product"><img alt="" height="600" src="/media/product/3.jpg" width="600"/></a>
<a class="product-name" href="/product">Twin Hoops</a>
<div class="quantity">Qty: 1</div>
<div class="price">$150.00</div>
</li>
<li class="mini-cart-item">
<a class="remove" href="#" title="Remove this item"><i class="icon_close"></i></a>
<a class="product-image" href="/product"><img alt="" height="600" src="/media/product/1.jpg" width="600"/></a>
<a class="product-name" href="/product">Medium Flat Hoops</a>
<div class="quantity">Qty: 1</div>
<div class="price">$100.00</div>
</li>
</ul>
<div class="total-cart">
<div class="title-total">Total: </div>
<div class="total-price"><span>$250.00</span></div>
</div>
<div class="free-ship">
<div class="title-ship">Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong></div>
<div class="total-percent"><div class="percent" style="width:20%"></div></div>
</div>
<div class="buttons">
<a class="button btn view-cart btn-primary" href="/cart">View cart</a>
<a class="button btn checkout btn-default" href="/checkout">Check out</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="header-mobile-fixed">
<!-- Shop -->
<div class="shop-page">
<a href="/shop"><i class="wpb-icon-shop"></i></a>
</div>
<!-- Login -->
<div class="my-account">
<div class="login-header">
<a href="/account"><i class="wpb-icon-user"></i></a>
</div>
</div>
<!-- Search -->
<div class="search-box">
<div class="search-toggle"><i class="wpb-icon-magnifying-glass"></i></div>
</div>
<!-- Wishlist -->
<div class="wishlist-box">
<a href="/wishlist"><i class="wpb-icon-heart"></i></a>
</div>
</div>
</div>
<div class="header-desktop">
<div class="header-wrapper">
<div class="section-padding">
<div class="section-container large p-l-r">
<div class="row">
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-left">
<div class="site-logo">
<a href="/">
<img alt="Mojuri – Jewelry Store HTML Template" height="140" src="/media/logo.png" width="400">
</img></a>
</div>
</div>
<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
<div class="site-navigation">
<nav id="main-navigation">
<ul class="menu" id="menu-main-menu">
<li class="level-0 menu-item menu-item-has-children current-menu-item">
<a href="/"><span class="menu-item-text">Home</span></a>
<ul class="sub-menu">
<li>
<a href="/"><span class="menu-item-text">Home Clean</span></a>
</li>
<li>
<a href="/home-2"><span class="menu-item-text">Home Collection</span></a>
</li>
<li>
<a href="/home-3"><span class="menu-item-text">Home Minimal</span></a>
</li>
<li>
<a href="/home-4"><span class="menu-item-text">Home Modern</span></a>
</li>
<li>
<a href="/home-5"><span class="menu-item-text">Home Parallax</span></a>
</li>
<li>
<a href="/home-6"><span class="menu-item-text">Home Strong</span></a>
</li>
<li>
<a href="/home-7"><span class="menu-item-text">Home Style</span></a>
</li>
<li>
<a href="/home-8"><span class="menu-item-text">Home Unique</span></a>
</li>
</ul>
</li>
<li class="level-0 menu-item menu-item-has-children">
<a href="/shop"><span class="menu-item-text">Shop</span></a>
<ul class="sub-menu">
<li class="level-1 menu-item menu-item-has-children">
<a href="/shop"><span class="menu-item-text">Shop - Products</span></a>
<ul class="sub-menu">
<li>
<a href="/shop-grid-left"><span class="menu-item-text">Shop Grid - Left Sidebar</span></a>
</li>
<li>
<a href="/shop-list-left"><span class="menu-item-text">Shop List - Left Sidebar</span></a>
</li>
<li>
<a href="/shop-grid-right"><span class="menu-item-text">Shop Grid - Right Sidebar</span></a>
</li>
<li>
<a href="/shop-list-right"><span class="menu-item-text">Shop List - Right Sidebar</span></a>
</li>
<li>
<a href="/shop"><span class="menu-item-text">Shop Grid - No Sidebar</span></a>
</li>
</ul>
</li>
<li>
<a href="/product"><span class="menu-item-text">Shop Details</span></a>
</li>
<li>
<a href="/cart"><span class="menu-item-text">Shop - Cart</span></a>
</li>
<li>
<a href="/checkout"><span class="menu-item-text">Shop - Checkout</span></a>
</li>
<li>
<a href="/wishlist"><span class="menu-item-text">Shop - Wishlist</span></a>
</li>
</ul>
</li>
<li class="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth align-center">
<a href="/blog"><span class="menu-item-text">Blog</span></a>
<div class="sub-menu">
<div class="row">
<div class="col-md-5">
<div class="menu-section">
<h2 class="sub-menu-title">Blog Category</h2>
<ul class="menu-list">
<li>
<a href="/blog-grid-left"><span class="menu-item-text">Blog Grid - Left Sidebar</span></a>
</li>
<li>
<a href="/blog-grid-right"><span class="menu-item-text">Blog Grid - Right Sidebar</span></a>
</li>
<li>
<a href="/blog-list-left"><span class="menu-item-text">Blog List - Left Sidebar</span></a>
</li>
<li>
<a href="/blog-list-right"><span class="menu-item-text">Blog List - Right Sidebar</span></a>
</li>
<li>
<a href="/blog"><span class="menu-item-text">Blog Grid - No Sidebar</span></a>
</li>
</ul>
</div>
<div class="menu-section">
<h2 class="sub-menu-title">Blog Details</h2>
<ul class="menu-list">
<li>
<a href="/blog-detail-left"><span class="menu-item-text">Blog Details - Left Sidebar</span></a>
</li>
<li>
<a href="/blog-detail-right"><span class="menu-item-text">Blog Details - Right Sidebar</span></a>
</li>
<li>
<a href="/blog-detail"><span class="menu-item-text">Blog Details - No Sidebar</span></a>
</li>
</ul>
</div>
</div>
<div class="col-md-7">
<div class="menu-section">
<h2 class="sub-menu-title">Recent Posts</h2>
<div class="block block-posts recent-posts p-t-5">
<ul class="posts-list">
<li class="post-item">
<a class="post-image" href="/blog-detail">
<img src="/media/blog/1.jpg"/>
</a>
<div class="post-content">
<h2 class="post-title">
<a href="/blog-detail">
																								Bridial Fair Collections 2023
																							</a>
</h2>
<div class="post-time">
<span class="post-date">May 30, 2022</span>
<span class="post-comment">4 Comments</span>
</div>
</div>
</li>
<li class="post-item">
<a class="post-image" href="/blog-detail">
<img src="/media/blog/2.jpg"/>
</a>
<div class="post-content">
<h2 class="post-title">
<a href="/blog-detail">
																								Our Sterling Silver
																							</a>
</h2>
<div class="post-time">
<span class="post-date">Aug 24, 2022</span>
<span class="post-comment">2 Comments</span>
</div>
</div>
</li>
<li class="post-item">
<a class="post-image" href="/blog-detail">
<img src="/media/blog/3.jpg"/>
</a>
<div class="post-content">
<h2 class="post-title">
<a href="/blog-detail">
																								Kitchen Inspired On Japanese
																							</a>
</h2>
<div class="post-time">
<span class="post-date">Dec 06, 2022</span>
<span class="post-comment">1 Comment</span>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</li>
<li class="level-0 menu-item menu-item-has-children">
<a href="#"><span class="menu-item-text">Pages</span></a>
<ul class="sub-menu">
<li>
<a href="/login"><span class="menu-item-text">Login / Register</span></a>
</li>
<li>
<a href="/forgot-password"><span class="menu-item-text">Forgot Password</span></a>
</li>
<li>
<a href="/account"><span class="menu-item-text">My Account</span></a>
</li>
<li>
<a href="/about"><span class="menu-item-text">About Us</span></a>
</li>
<li>
<a href="/contact"><span class="menu-item-text">Contact</span></a>
</li>
<li>
<a href="/faq"><span class="menu-item-text">FAQ</span></a>
</li>
<li>
<a href="/404"><span class="menu-item-text">Page 404</span></a>
</li>
</ul>
</li>
<li class="level-0 menu-item">
<a href="/contact"><span class="menu-item-text">Contact</span></a>
</li>
</ul>
</nav>
</div>
</div>
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 header-right">
<div class="header-page-link">
<!-- Search -->
<div class="search-box">
<div class="search-toggle"><i class="icon-search"></i></div>
</div>
<!-- Login -->
<div class="login-header icon">
<a class="active-login" href="#"><i class="icon-user"></i></a>
<div class="form-login-register">
<div class="box-form-login">
<div class="active-login"></div>
<div class="box-content">
<div class="form-login active">
<form class="login" id="login_ajax" method="post">
<h2>Sign in</h2>
<p class="status"></p>
<div class="content">
<div class="username">
<input class="input-text" id="username" name="username" placeholder="Your name" required="required" type="text"/>
</div>
<div class="password">
<input class="input-text" id="password" name="password" placeholder="Password" required="required" type="password"/>
</div>
<div class="rememberme-lost">
<div class="rememberme">
<input id="rememberme" name="rememberme" type="checkbox" value="forever"/>
<label class="inline" for="rememberme">Remember me</label>
</div>
<div class="lost_password">
<a href="#">Lost your password?</a>
</div>
</div>
<div class="button-login">
<input class="button" name="login" type="submit" value="Login"/>
</div>
<div class="button-next-reregister">Create An Account</div>
</div>
</form>
</div>
<div class="form-register">
<form class="register" method="post">
<h2>REGISTER</h2>
<div class="content">
<div class="email">
<input class="input-text" id="reg_email" name="email" placeholder="Email" type="email" value=""/>
</div>
<div class="password">
<input class="input-text" id="reg_password" name="password" placeholder="Password" type="password"/>
</div>
<div class="button-register">
<input class="button" name="register" type="submit" value="Register"/>
</div>
<div class="button-next-login">Already has an account</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<!-- Wishlist -->
<div class="wishlist-box">
<a href="/wishlist"><i class="icon-heart"></i></a>
<span class="count-wishlist">1</span>
</div>
<!-- Cart -->
<div class="mojuri-topcart dropdown light">
<div class="dropdown mini-cart top-cart">
<div class="remove-cart-shadow"></div>
<a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle cart-icon" data-toggle="dropdown" href="#" role="button">
<div class="icons-cart"><i class="icon-large-paper-bag"></i><span class="cart-count">2</span></div>
</a>
<div class="dropdown-menu cart-popup">
<div class="cart-empty-wrap">
<ul class="cart-list">
<li class="empty">
<span>No products in the cart.</span>
<a class="go-shop" href="/shop">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></a>
</li>
</ul>
</div>
<div class="cart-list-wrap">
<ul class="cart-list">
<li class="mini-cart-item">
<a class="remove" href="#" title="Remove this item"><i class="icon_close"></i></a>
<a class="product-image" href="/product"><img alt="" height="600" src="/media/product/3.jpg" width="600"/></a>
<a class="product-name" href="/product">Twin Hoops</a>
<div class="quantity">Qty: 1</div>
<div class="price">$150.00</div>
</li>
<li class="mini-cart-item">
<a class="remove" href="#" title="Remove this item"><i class="icon_close"></i></a>
<a class="product-image" href="/product"><img alt="" height="600" src="/media/product/1.jpg" width="600"/></a>
<a class="product-name" href="/product">Medium Flat Hoops</a>
<div class="quantity">Qty: 1</div>
<div class="price">$100.00</div>
</li>
</ul>
<div class="total-cart">
<div class="title-total">Total: </div>
<div class="total-price"><span>$250.00</span></div>
</div>
<div class="free-ship">
<div class="title-ship">Buy <strong>$400</strong> more to enjoy <strong>FREE Shipping</strong></div>
<div class="total-percent"><div class="percent" style="width:20%"></div></div>
</div>
<div class="buttons">
<a class="button btn view-cart btn-primary" href="/cart">View cart</a>
<a class="button btn checkout btn-default" href="/checkout">Check out</a>
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
</header>
`;

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const lastUser = useAuthStore((state) => state.lastUser);
  const sessionStatus = useAuthStore((state) => state.sessionStatus);
  const logout = useAuthStore((state) => state.logout);
  const displayUser = user ?? lastUser;

  return (
    <>
      <HtmlBlock html={headerHtml} />
      {displayUser && (
        <div className={`site-auth-status site-auth-status-${sessionStatus}`}>
          <div className="section-container p-l-r">
            <span>
              <strong>{displayUser.name}</strong> - {sessionStatus === "active" ? "đang hoạt động" : "ngưng hoạt động"}
            </span>
            {user ? (
              <button type="button" onClick={logout}>
                Đăng xuất
              </button>
            ) : (
              <a href="/login">Đăng nhập</a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
