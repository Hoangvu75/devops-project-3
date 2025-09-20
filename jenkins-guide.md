# Hướng dẫn Jenkins CI cơ bản

## Bước 1: Cài đặt Jenkins

### Cách 1: Download và cài đặt
1. Tải Jenkins từ: https://www.jenkins.io/download/
2. Cài đặt theo hướng dẫn
3. Mở http://localhost:8080
4. Làm theo wizard setup

### Cách 2: Dùng Docker (dễ hơn)
```bash
docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
```

## Bước 2: Setup Jenkins lần đầu

1. **Mở http://localhost:8080**
2. **Nhập password** (hiển thị trong terminal hoặc file)
3. **Chọn "Install suggested plugins"**
4. **Tạo admin user**
5. **Finish setup**

## Bước 3: Cài thêm plugins cần thiết

1. **Manage Jenkins** → **Manage Plugins**
2. **Available** tab
3. Tìm và cài:
   - **NodeJS Plugin**
   - **Git Plugin** (thường đã có sẵn)

## Bước 4: Cấu hình Node.js

1. **Manage Jenkins** → **Global Tool Configuration**
2. **NodeJS** section
3. **Add NodeJS**:
   - Name: `Node18`
   - Version: `NodeJS 18.x.x`
   - ✅ Install automatically
4. **Save**

## Bước 5: Tạo Jenkins Job

1. **New Item**
2. **Enter name**: `devops-frontend-ci`
3. **Pipeline** → **OK**

### Cấu hình Pipeline:

**Pipeline section:**
- **Definition**: `Pipeline script from SCM`
- **SCM**: `Git`
- **Repository URL**: `đường-dẫn-git-repo-của-bạn`
- **Branch**: `*/dev`
- **Script Path**: `Jenkinsfile`

**Save**

## Bước 6: Chạy Build

1. **Build Now**
2. Xem kết quả trong **Console Output**

## Giải thích Jenkinsfile

```groovy
pipeline {
    agent any                    // Chạy trên bất kỳ agent nào
    
    stages {                     // Các bước thực hiện
        stage('Checkout') {      // Bước 1: Lấy code
            steps {
                checkout scm     // Lấy code từ Git
            }
        }
        
        stage('Install') {       // Bước 2: Cài dependencies
            steps {
                bat 'yarn install'  // Chạy yarn install
            }
        }
        
        stage('Test') {          // Bước 3: Chạy tests
            steps {
                bat 'yarn test --watchAll=false'
            }
        }
        
        stage('Build') {         // Bước 4: Build ứng dụng
            steps {
                bat 'yarn build'
            }
        }
    }
    
    post {                       // Sau khi xong
        success {
            echo 'Thành công!'
        }
        failure {
            echo 'Thất bại!'
        }
    }
}
```

## Troubleshooting

### Lỗi thường gặp:

1. **'yarn' không được nhận diện**
   - Cài Node.js plugin
   - Cấu hình Global Tool Configuration

2. **Git không tìm thấy repo**
   - Kiểm tra URL repo
   - Thêm credentials nếu private repo

3. **Build thất bại**
   - Xem Console Output để biết lỗi cụ thể
   - Đảm bảo code chạy được local trước

## Kết quả mong đợi

Khi build thành công, bạn sẽ thấy:
- ✅ Checkout: Lấy code thành công
- ✅ Install: Cài dependencies thành công  
- ✅ Test: Tests pass
- ✅ Build: Tạo được file build

## Bước tiếp theo

Sau khi CI cơ bản chạy được, có thể mở rộng:
- Thêm deployment
- Thêm notifications
- Thêm code quality checks
- Thêm Docker build


