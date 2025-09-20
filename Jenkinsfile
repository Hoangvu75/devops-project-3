pipeline {
    agent any
    
    tools {
        nodejs 'Node18'  // Tên NodeJS tool đã cấu hình
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Lấy code từ Git nhánh dev...'
                git branch: 'dev', url: 'https://github.com/Hoangvu75/devops-project-3.git'
            }
        }
        
        stage('Check Environment') {
            steps {
                echo 'Kiểm tra Node.js và npm...'
                sh '''
                    node --version
                    npm --version
                    which node
                    which npm
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Cài đặt dependencies với npm...'
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Chạy tests...'
                sh 'npm test -- --watchAll=false'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Build ứng dụng...'
                sh 'npm run build'
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