# Mojuri Fullstack Workspace

Monorepo này tách 2 hệ thống độc lập để sinh viên thấy rõ luồng giao tiếp Frontend - Backend qua JSON API.

## Kiến trúc

- `backend-api` - Next.js API chạy port `3000`
  - Trả dữ liệu JSON cho product, order, contact, blog.
  - Có CORS cho frontend port `5173`.
  - Có auth JWT demo và phân quyền admin.
  - Hiện dùng mock repository trong `src/lib/db.ts`; khi học database thật có thể thay lớp này bằng MongoDB/PostgreSQL.

- `mojuri-react-structured` - React Vite chạy port `5173`
  - Client App dùng giao diện Mojuri có sẵn: Home, Shop, Cart, Checkout, Blog, Contact.
  - Admin Dashboard ở `/admin`, gọi API backend để login và quản lý product, order, contact, blog.

## Chạy dự án

```bash
npm install
npm run dev
```

Hoặc chạy riêng từng phần:

```bash
npm run dev:backend
npm run dev:frontend
```

Backend: `http://localhost:3000`

Frontend: `http://localhost:5173`

Neu may chua cai du Next.js dependencies hoac `npm install` bi loi `ENOSPC`, co the chay backend mock tam thoi:

```bash
npm.cmd run dev:backend:mock
```

Hoac chay ca mock backend va frontend:

```bash
npm.cmd run dev:mock
```

## Biến môi trường

Copy file mẫu nếu cần chỉnh:

```bash
copy backend-api\.env.example backend-api\.env.local
copy mojuri-react-structured\.env.example mojuri-react-structured\.env.local
```

Giá trị chính:

```env
FRONTEND_ORIGIN=http://localhost:5173
JWT_SECRET=change-me-in-production
DATABASE_URL=mongodb://localhost:27017/mojuri
VITE_API_URL=http://localhost:3000/api
```

## API mẫu

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:slug`
- `GET /api/categories`
- `GET /api/blogs`
- `GET /api/blogs/:slug`
- `POST /api/contact`
- `POST /api/orders`
- `GET /api/orders/:id`
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/admin/products`
- `POST /api/admin/products`
- `GET /api/admin/products/:id`
- `PUT /api/admin/products/:id`
- `DELETE /api/admin/products/:id`
- `GET /api/admin/orders`
- `PATCH /api/admin/orders/:id`
- `GET /api/admin/contacts`
- `PATCH /api/admin/contacts/:id`
- `GET /api/admin/blogs`
- `POST /api/admin/blogs`

## Module đã triển khai

- Product Management: CRUD admin, category Rings/Necklaces/Earrings/Bracelets, thumbnail/gallery, price/sale price, stock/status, client shop có grid/list, lọc, tìm kiếm, phân trang, chi tiết và related products.
- Order Management: cart localStorage, checkout tạo order, tra cứu trạng thái, admin xem/cập nhật trạng thái và thống kê doanh thu cơ bản.
- Contact Management: contact form gửi API, admin inbox, trạng thái read/unread.
- Blog Management: admin tạo bài viết rich text dạng HTML, category, draft/published, client blog list/detail và recent posts widget.

## Chuẩn kỹ thuật đã áp dụng

- Backend dùng Next.js App Router trong `backend-api/src/app/api`.
- Admin API được bảo vệ bằng JWT qua `requireAdmin`.
- Password demo được hash và kiểm tra bằng `bcryptjs`.
- Payload từ client được validate bằng `zod` trước khi xử lý.
- Đã khai báo Mongoose connection/models cho Product, User, Order, Contact, BlogPost trong `backend-api/src/models`.
- Frontend dùng `react-router-dom` v6.
- Frontend dùng TanStack Query cho data fetching/caching ở Shop, Product, Home, Blog.
- Frontend dùng Zustand cho global Cart state và Admin Auth state.
- Product card đã được tách thành reusable component `src/components/ProductCard.tsx`.

Lưu ý: nếu `npm install` báo `ENOSPC`, máy đang hết dung lượng. Hãy giải phóng ổ đĩa rồi chạy lại:

```bash
npm.cmd install
```

Admin demo:

```text
Email: admin@mojuri.local
Password: admin123
```

User demo:

```text
Email: user@mojuri.local
Password: user123
```

Auth API:

- `POST /api/auth/login`
- `POST /api/auth/register`

## Ghi chú cho phần database thật

Các route đang không phụ thuộc trực tiếp vào MongoDB/PostgreSQL. Toàn bộ thao tác dữ liệu đi qua `backend-api/src/lib/db.ts`, nên khi đổi sang database thật chỉ cần thay implementation ở file này hoặc tách thành repository riêng.
