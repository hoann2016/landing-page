pipeline {
    agent any
    environment {
        HOME="."
        REGISTRY = "repo.treescale.com/ludiinohub/lb-landing-page-dev"
        REGISTRY_CREDENTIAL = "treescalehub"
        MAIN_VERSION = "v0.1."
        DOCKER_TAG = "$MAIN_VERSION$BUILD_NUMBER"
        CONTAINER_NAME = 'lb-landing-page'
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
    post {
        success {
            notifySuccess()
        }
        unstable {
            notifyUnstable()
        }
        failure {
            notifyFailed()
        }
    }
}

def notifyBuild(String buildStatus = 'STARTED', String colorCode = '#5492f7', String notify = '') {

    def project = "lb-landing-page"
    def channel = "jenkins-notification"
    def base = "https://gitlab.com/ludiino/LOB/${project}/commit/" 

    def commit = sh(returnStdout: true, script: 'git log -n 1 --format="%H"').trim()
    def link = "${base}${commit}" 
    def shortCommit = commit.take(6)
    def title = sh(returnStdout: true, script: 'git log -n 1 --format="%s"').trim()
    def subject = "<${link}|${shortCommit}> ${title}" 

    def summary = "${buildStatus}: Job <${env.RUN_DISPLAY_URL}|${env.JOB_NAME} [${env.BUILD_NUMBER}]>\n${subject} ${notify}"

    slackSend (channel: "#${channel}", color: colorCode, message: summary)
}

def author() {
    return sh(returnStdout: true, script: 'git log -n 1 --format="%an" | awk \'{print tolower($1);}\'').trim()
}

def notifyStarted() {
    notifyBuild()
}

def notifySuccess() {
    notifyBuild('SUCCESS', 'good')
}

def notifyUnstable() {
    notifyBuild('UNSTABLE', 'warning', "\nAuthor: @${author()} <${RUN_CHANGES_DISPLAY_URL}|Changelog>")
}

def notifyFailed() {
    notifyBuild('FAILED', 'danger', "\nAuthor: @${author()} <${RUN_CHANGES_DISPLAY_URL}|Changelog>")
}
