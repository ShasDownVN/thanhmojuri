# Mojuri React TypeScript Structured

Project đã được chuyển từ bộ HTML/CSS/JS gốc sang cấu trúc React + TypeScript + Vite.

## Cấu trúc chính

```text
src/
├─ assets/
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ Layout.tsx
│  └─ HtmlBlock.tsx
├─ pages/
│  ├─ Home.tsx ... Home8.tsx
│  ├─ Shop.tsx, ShopGridLeft.tsx, ShopGridRight.tsx
│  ├─ ShopListLeft.tsx, ShopListRight.tsx
│  ├─ Product.tsx, Cart.tsx, Checkout.tsx, Wishlist.tsx
│  ├─ BlogList.tsx, BlogGridLeft.tsx, BlogGridRight.tsx
│  ├─ BlogListLeft.tsx, BlogListRight.tsx
│  ├─ BlogDetail.tsx, BlogDetailLeft.tsx, BlogDetailRight.tsx
│  ├─ About.tsx, Contact.tsx, Faq.tsx
│  ├─ Login.tsx, ForgotPassword.tsx, Account.tsx
│  └─ Page404.tsx
├─ services/templateScripts.ts
├─ App.tsx
└─ main.tsx
```

## Chạy project

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Các route đã thêm

- `/`, `/home-2`, `/home-3`, `/home-4`, `/home-5`, `/home-6`, `/home-7`, `/home-8`
- `/shop`, `/shop-grid-left`, `/shop-grid-right`, `/shop-list-left`, `/shop-list-right`
- `/product`, `/cart`, `/checkout`, `/wishlist`
- `/blog`, `/blog-grid-left`, `/blog-grid-right`, `/blog-list-left`, `/blog-list-right`
- `/blog-detail`, `/blog-detail-left`, `/blog-detail-right`
- `/about`, `/contact`, `/faq`, `/login`, `/forgot-password`, `/account`, `/404`
