pipeline {
    agent any
    
    tools {
        nodejs 'Node18'
    }
    
    environment {
        // Xác định loại build
        IS_PR = "${env.CHANGE_ID != null}"
        TARGET_BRANCH = "${env.CHANGE_TARGET ?: env.BRANCH_NAME}"
        SOURCE_BRANCH = "${env.CHANGE_BRANCH ?: env.BRANCH_NAME}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    if (env.CHANGE_ID) {
                        echo "🔄 Building PR #${env.CHANGE_ID}: ${env.CHANGE_BRANCH} → ${env.CHANGE_TARGET}"
                    } else {
                        echo "🌿 Building branch: ${env.BRANCH_NAME}"
                    }
                }
                checkout scm
            }
        }
        
        stage('Environment Info') {
            steps {
                sh '''
                    echo "Node version: $(node --version)"
                    echo "NPM version: $(npm --version)"
                    echo "Branch: ${BRANCH_NAME}"
                    echo "Build type: ${IS_PR}"
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo '📦 Cài đặt dependencies...'
                sh 'npm ci'
            }
        }
        
        stage('Code Quality') {
            parallel {
                stage('Lint') {
                    steps {
                        echo '🔍 Kiểm tra code style...'
                        sh 'npm run lint'
                    }
                }
                stage('Security Audit') {
                    steps {
                        echo '🔒 Kiểm tra security...'
                        sh 'npm audit --audit-level moderate || true'
                    }
                }
            }
        }
        
        stage('Test') {
            steps {
                echo '🧪 Chạy tests...'
                sh 'npm test -- --watchAll=false --coverage --ci'
            }
            post {
                always {
                    // Publish test results
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Test Coverage Report'
                    ])
                }
            }
        }
        
        stage('Build') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                    changeRequest target: 'main'
                }
            }
            steps {
                echo '🏗️ Build ứng dụng...'
                sh 'npm run build'
            }
            post {
                success {
                    archiveArtifacts artifacts: 'build/**/*', fingerprint: true
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'dev'
            }
            steps {
                echo '🚀 Deploy to staging environment...'
                // Add staging deployment logic here
                sh 'echo "Deploying to staging..."'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo '🎉 Deploy to production environment...'
                // Add production deployment logic here
                sh 'echo "Deploying to production..."'
            }
        }
    }
    
    post {
        always {
            echo '🧹 Cleaning up...'
            cleanWs()
        }
        success {
            script {
                if (env.CHANGE_ID) {
                    echo "✅ PR #${env.CHANGE_ID} CI thành công!"
                } else {
                    echo "✅ Branch ${env.BRANCH_NAME} CI thành công!"
                }
            }
        }
        failure {
            script {
                if (env.CHANGE_ID) {
                    echo "❌ PR #${env.CHANGE_ID} CI thất bại!"
                } else {
                    echo "❌ Branch ${env.BRANCH_NAME} CI thất bại!"
                }
            }
        }
    }
}