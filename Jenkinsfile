pipeline {
    agent any
    environment {
        HOME="."
        REGISTRY = "repo.treescale.com/ludiinohub/lb-landing-page-dev"
        REGISTRY_CREDENTIAL = "treescalehub"
        MAIN_VERSION = "v0.1."
        DOCKER_TAG = "$MAIN_VERSION$BUILD_NUMBER"
        CONTAINER_NAME = 'lb-landing-page-dev'
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
                    docker.withRegistry( "https://repo.treescale.com" , REGISTRY_CREDENTIAL ) {
                        dockerImage.push('latest')
                    }
                }
                sh "docker rmi $REGISTRY:$DOCKER_TAG"
            }
        }
        stage('Deploy') {
            steps {
                echo 'DEPLOY'
                sshagent (credentials: ['ssh-lobdev']) {
                    withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: REGISTRY_CREDENTIAL, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                        sh "ssh -o StrictHostKeyChecking=no $LOBDEV_USER@$LOBDEV_HOST '/usr/bin/deployv2 $USERNAME $PASSWORD $CONTAINER_NAME'"
                    }
                }
                echo 'DONE'
            }
        }
    }
}