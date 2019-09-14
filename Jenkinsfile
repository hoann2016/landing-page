pipeline {
    agent any
    environment {
        HOME="."
        REGISTRY = "ludiinohub/lob"
        REGISTRY_CREDENTIAL = "dockerhub"
        DOCKER_NAME= "lb-landing-page"
        DOCKER_TAG = "lb-landing-page-$DEV_ENVIRONMENT-$BUILD_NUMBER"
    }
    stages {
        // stage('Prepare') { 
        //     agent {
        //         docker {
        //             image 'node:10.16-alpine' 
        //             args '-p 3000:3000' 
        //         }
        //     }
        //     options {
        //         timeout(time: 1, unit: 'HOURS') 
        //     }
        //     steps {
        //         sh 'npm install'
        //         sh 'npm run lint'
        //     }
        // }
        stage('Build') {
            options {
                timeout(time: 1, unit: 'HOURS') 
            }
            steps {
                script {
                    sh 'sed -i -e "s/ENV/$DEV_ENVIRONMENT/g" ./Dockerfile'
                    sh 'rm -f ./Dockerfile-e'
                    dockerImage = docker.build REGISTRY + ":$DOCKER_TAG"
                }
            }

        }
        stage('Release') {
            options {
                timeout(time: 1, unit: 'HOURS') 
            }
            steps {
                script {
                    docker.withRegistry( '', REGISTRY_CREDENTIAL ) {
                        dockerImage.push()
                    }
                }
                sh "docker rmi $REGISTRY:$DOCKER_TAG"
            }
        }
        stage('Deploy') {
            steps {
                echo 'DEPLOY'
                sshagent (credentials: ['ssh-lobdev']) {
                    sh 'ssh "$LOBDEV_USER@$LOBDEV_HOST" -T "/usr/bin/deploy $DOCKER_HUB_ID $DOCKER_HUB_PASSWORD $DOCKER_NAME $DOCKER_TAG"'
                }
                echo 'DONE'
            }
        }
    }
}