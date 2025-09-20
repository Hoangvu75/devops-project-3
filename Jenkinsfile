pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Lấy code từ Git...'
                checkout scm
            }
        }
        
        stage('Install') {
            steps {
                echo 'Cài đặt dependencies...'
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
        }
        failure {
            echo '❌ Build thất bại!'
        }
    }
}


