pipeline {
    agent any

    environment {
        IMAGE_NAME = "technicalraviweb/auth-service"
        DOCKER_CREDENTIALS_ID = "dockerhub-creds" 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Technical-Ravi-web/ecommerce-devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dir('auth-service') {
                        sh 'docker build -t $IMAGE_NAME .'
                    }
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push $IMAGE_NAME
                    '''
                }
            }
        }

        stage('Deploy (Dummy)') {
            steps {
                echo 'Here we will deploy to EC2/K8s in production.'
            }
        }
    }

    post {
        failure {
            echo "❌ Pipeline failed. Notify team / Rollback strategy needed."
        }
        success {
            echo "✅ Pipeline completed successfully!"
        }
    }
}

