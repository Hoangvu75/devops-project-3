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
                sh 'yarn install'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Chạy tests...'
                sh 'yarn test --watchAll=false'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Build ứng dụng...'
                sh 'yarn build'
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