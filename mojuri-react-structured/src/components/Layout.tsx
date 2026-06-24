import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import UiTemplateParts from './UiTemplateParts'

export default function Layout() {
  return (
    <>
      <div id="page" className="hfeed page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <UiTemplateParts />
    </>
  )
}
