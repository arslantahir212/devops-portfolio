pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "arslanlinux/devops-portfolio"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE}:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh 'echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push ${DOCKER_IMAGE}:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop devops-portfolio || true
                    docker rm devops-portfolio || true
                    docker run -d \
                      --name devops-portfolio \
                      -p 8081:80 \
                      ${DOCKER_IMAGE}:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'DevOps Portfolio CI/CD completed successfully!'
        }

        failure {
            echo 'CI/CD pipeline failed.'
        }
    }
}
