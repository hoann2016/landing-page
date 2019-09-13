pipeline {
    agent any
    environment {
        HOME="."
        REGISTRY = "ludiinohub/lob"
        REGISTRY_CREDENTIAL = "dockerhub"
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
                    dockerImage = docker.build REGISTRY + ":lb-landing-page-$DEV_ENVIRONMENT-$BUILD_NUMBER"
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
                sh "docker rmi $REGISTRY:lb-landing-page-$DEV_ENVIRONMENT-$BUILD_NUMBER"
            }
        }
        stage('Deploy') {
            steps {
                echo 'DEPLOY'
            }
        }
    }
}