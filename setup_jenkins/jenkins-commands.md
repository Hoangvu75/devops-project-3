# Jenkins Docker Commands

## 🚀 Khởi động nhanh (Đơn giản nhất)

```bash
# Chạy Jenkins với Docker (cách đơn giản nhất)
docker run -d \
  --name jenkins-server \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts

# Lấy password khởi tạo
docker exec jenkins-server cat /var/jenkins_home/secrets/initialAdminPassword
```

## 📦 Sử dụng Docker Compose (Khuyên dùng)

```bash
# Khởi động Jenkins với Docker Compose
docker-compose -f docker-compose.jenkins.yml up -d

# Xem logs
docker-compose -f docker-compose.jenkins.yml logs -f

# Dừng Jenkins
docker-compose -f docker-compose.jenkins.yml down

# Khởi động lại
docker-compose -f docker-compose.jenkins.yml restart
```

## 🛠️ Sử dụng Custom Image

```bash
# Build custom Jenkins image
docker build -f Dockerfile.jenkins -t my-jenkins:latest .

# Chạy custom image
docker run -d \
  --name my-jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  my-jenkins:latest
```

## 📋 Các lệnh hữu ích

```bash
# Xem logs Jenkins
docker logs jenkins-server -f

# Vào container Jenkins
docker exec -it jenkins-server bash

# Backup Jenkins data
docker cp jenkins-server:/var/jenkins_home ./jenkins-backup

# Restore Jenkins data
docker cp ./jenkins-backup jenkins-server:/var/jenkins_home

# Xem thông tin container
docker inspect jenkins-server

# Xem resource usage
docker stats jenkins-server
```

## 🔧 Troubleshooting

```bash
# Nếu Jenkins không khởi động được
docker logs jenkins-server

# Nếu thiếu quyền truy cập Docker
docker exec -u root jenkins-server usermod -aG docker jenkins

# Reset Jenkins (xóa tất cả data)
docker-compose -f docker-compose.jenkins.yml down -v
docker-compose -f docker-compose.jenkins.yml up -d

# Kiểm tra port có bị chiếm không
netstat -tlnp | grep :8080
```

## 🌐 Truy cập Jenkins

- **URL:** http://localhost:8080
- **Username:** admin (sau khi setup)
- **Password:** Lấy từ container hoặc tự đặt trong quá trình setup

## 📁 Cấu trúc Files

```
project/
├── docker-compose.jenkins.yml    # Docker Compose config
├── Dockerfile.jenkins           # Custom Jenkins image
├── plugins.txt                  # Danh sách plugins
├── jenkins-docker-setup.sh      # Setup script
└── jenkins-commands.md          # Commands reference
```
