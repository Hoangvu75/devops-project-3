#!/bin/bash

# Script để setup Jenkins với Docker
set -e

echo "🚀 Bắt đầu cài đặt Jenkins với Docker..."

# Kiểm tra Docker đã cài chưa
if ! command -v docker &> /dev/null; then
    echo "❌ Docker chưa được cài đặt. Vui lòng cài Docker trước."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose chưa được cài đặt. Vui lòng cài Docker Compose trước."
    exit 1
fi

echo "✅ Docker và Docker Compose đã sẵn sàng"

# Tạo network cho Jenkins nếu chưa có
docker network create jenkins-network 2>/dev/null || true

# Khởi động Jenkins
echo "📦 Khởi động Jenkins container..."
docker-compose -f docker-compose.jenkins.yml up -d

# Chờ Jenkins khởi động
echo "⏳ Chờ Jenkins khởi động (có thể mất 1-2 phút)..."
sleep 30

# Lấy initial admin password
echo "🔑 Lấy Initial Admin Password..."
JENKINS_PASSWORD=$(docker exec jenkins-server cat /var/jenkins_home/secrets/initialAdminPassword 2>/dev/null || echo "Chưa sẵn sàng")

echo ""
echo "🎉 Jenkins đã được khởi động thành công!"
echo ""
echo "📋 Thông tin truy cập:"
echo "   URL: http://localhost:8080"
echo "   Initial Admin Password: $JENKINS_PASSWORD"
echo ""
echo "📝 Các bước tiếp theo:"
echo "   1. Mở http://localhost:8080 trong trình duyệt"
echo "   2. Nhập password ở trên"
echo "   3. Chọn 'Install suggested plugins'"
echo "   4. Tạo admin user"
echo "   5. Hoàn thành setup"
echo ""
echo "🛠️  Các lệnh hữu ích:"
echo "   Xem logs: docker logs jenkins-server"
echo "   Dừng Jenkins: docker-compose -f docker-compose.jenkins.yml down"
echo "   Khởi động lại: docker-compose -f docker-compose.jenkins.yml restart"
echo ""
