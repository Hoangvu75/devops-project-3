# DevOps Project - Frontend Todo App

Ứng dụng Todo đơn giản được xây dựng bằng React để học CI/CD Pipeline.

## 🚀 Tính năng

- ✅ Thêm, xóa, đánh dấu hoàn thành công việc
- 💾 Lưu trữ dữ liệu trong localStorage
- 📊 Thống kê công việc (tổng số, đã hoàn thành, chưa hoàn thành)
- 🎨 Giao diện đẹp và responsive
- 🧪 Unit tests với Jest
- 🔧 ESLint cho code quality

## 📦 Cài đặt

```bash
# Cài đặt dependencies
yarn install

# Chạy ứng dụng ở chế độ development
yarn start
# hoặc
yarn dev

# Build cho production
yarn build

# Chạy tests
yarn test

# Kiểm tra code quality
yarn lint

# Tự động fix linting issues
yarn lint:fix

# Xóa thư mục build
yarn clean
```

## 🏗️ Cấu trúc project

```
src/
├── components/          # React components
│   ├── Header.js       # Header component
│   ├── AddTodo.js      # Form thêm todo
│   ├── TodoList.js     # Danh sách todos
│   ├── TodoItem.js     # Item todo đơn lẻ
│   └── Stats.js        # Thống kê
├── __tests__/          # Unit tests
├── App.js              # Main App component
├── index.js            # Entry point
├── styles.css          # Global styles
└── setupTests.js       # Test configuration
```

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Library
- **Webpack 5** - Module bundler
- **Babel** - JavaScript compiler
- **Jest** - Testing framework
- **ESLint** - Code linting
- **CSS3** - Styling với Flexbox và Grid
- **Yarn** - Package manager (thay thế npm)

## 🎯 Mục đích

Project này được tạo ra để:
- Học cách thiết lập CI/CD pipeline
- Practice với các công cụ DevOps
- Hiểu về automated testing và deployment
- Làm quen với containerization (Docker)

## 📝 Scripts có sẵn

- `yarn start` / `yarn dev` - Chạy development server (port 3000)
- `yarn build` - Build production bundle
- `yarn test` - Chạy unit tests
- `yarn lint` - Kiểm tra code style
- `yarn lint:fix` - Tự động fix code style issues
- `yarn clean` - Xóa thư mục build

## 🌐 Truy cập ứng dụng

Sau khi chạy `yarn start` hoặc `yarn dev`, mở trình duyệt và truy cập:
```
http://localhost:3000
```

## 📈 Các bước tiếp theo cho CI/CD

1. **Containerization**: Tạo Dockerfile
2. **CI Pipeline**: Thiết lập GitHub Actions hoặc GitLab CI
3. **Testing**: Automated testing trong pipeline
4. **Deployment**: Deploy lên cloud platforms
5. **Monitoring**: Thiết lập monitoring và logging

## 🎯 Bắt đầu nhanh với Yarn

Project này hoàn toàn sẵn sàng cho việc học CI/CD! Bạn có thể:

1. **Cài đặt dependencies**: `yarn install`
2. **Chạy ứng dụng**: `yarn start` hoặc `yarn dev` (sẽ mở trên http://localhost:3000)
3. **Test các tính năng**: Thêm, xóa, hoàn thành todos
4. **Chạy tests**: `yarn test` để kiểm tra unit tests
5. **Build production**: `yarn build` để tạo production build

## 📋 Yarn vs NPM

Tại sao chọn Yarn:
- ⚡ **Nhanh hơn**: Parallel installation và caching tốt hơn
- 🔒 **Bảo mật**: yarn.lock đảm bảo consistent dependencies
- 🎯 **Deterministic**: Cùng dependencies trên mọi máy
- 🛠️ **Tốt hơn cho CI/CD**: Ổn định hơn trong automated environments

---

🎉 **Happy Coding với Yarn!** Project này sẵn sàng cho việc học CI/CD!