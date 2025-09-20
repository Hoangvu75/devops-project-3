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
