pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Lấy code từ Git nhánh dev...'
                git branch: 'dev', url: 'https://github.com/Hoangvu75/devops-project-3.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Cài đặt dependencies với Yarn...'
                bat 'yarn install'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Chạy tests...'
                bat 'yarn test --watchAll=false'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Build ứng dụng...'
                bat 'yarn build'
            }
        }
    }
    
    post {
        success {
            echo '✅ Build thành công!'
            echo '📦 Ứng dụng đã được build và test xong'
        }
        failure {
            echo '❌ Build thất bại!'
            echo '🔍 Kiểm tra logs để xem lỗi'
        }
    }
}