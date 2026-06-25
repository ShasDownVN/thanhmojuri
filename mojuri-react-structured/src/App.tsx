import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import Home4 from './pages/Home4'
import Home5 from './pages/Home5'
import Home6 from './pages/Home6'
import Home7 from './pages/Home7'
import Home8 from './pages/Home8'
import ShopGridLeft from './pages/ShopGridLeft'
import ShopGridRight from './pages/ShopGridRight'
import ShopListLeft from './pages/ShopListLeft'
import ShopListRight from './pages/ShopListRight'
import ShopDetails from './pages/ShopDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Wishlist from './pages/Wishlist'
import BlogList from './pages/BlogList'
import BlogGridLeft from './pages/BlogGridLeft'
import BlogGridRight from './pages/BlogGridRight'
import BlogListLeft from './pages/BlogListLeft'
import BlogListRight from './pages/BlogListRight'
import BlogDetail from './pages/BlogDetail'
import BlogDetailLeft from './pages/BlogDetailLeft'
import BlogDetailRight from './pages/BlogDetailRight'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Account from './pages/Account'
import Page404 from './pages/Page404'
import AdminDashboard from './pages/admin/AdminDashboard'
import { loadTemplateScripts, refreshTemplateEffects } from './services/templateScripts'
import './App.css'

function TemplateScriptLoader() {
  const location = useLocation()

  useEffect(() => {
    loadTemplateScripts()
      .then(() => setTimeout(refreshTemplateEffects, 150))
      .catch(console.error)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (window.__mojuriScriptsLoaded) {
      setTimeout(refreshTemplateEffects, 150)
    }
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <>
      <TemplateScriptLoader />
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/home-3" element={<Home3 />} />
          <Route path="/home-4" element={<Home4 />} />
          <Route path="/home-5" element={<Home5 />} />
          <Route path="/home-6" element={<Home6 />} />
          <Route path="/home-7" element={<Home7 />} />
          <Route path="/home-8" element={<Home8 />} />
          <Route path="/shop" element={<ShopGridLeft />} />
          <Route path="/shop-grid-left" element={<ShopGridLeft />} />
          <Route path="/shop-grid-right" element={<ShopGridRight />} />
          <Route path="/shop-list-left" element={<ShopListLeft />} />
          <Route path="/shop-list-right" element={<ShopListRight />} />
          <Route path="/product" element={<ShopDetails />} />
          <Route path="/product/:slug" element={<ShopDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog-grid-left" element={<BlogGridLeft />} />
          <Route path="/blog-grid-right" element={<BlogGridRight />} />
          <Route path="/blog-list-left" element={<BlogListLeft />} />
          <Route path="/blog-list-right" element={<BlogListRight />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/blog-detail-left" element={<BlogDetailLeft />} />
          <Route path="/blog-detail-right" element={<BlogDetailRight />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/account" element={<Account />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}
