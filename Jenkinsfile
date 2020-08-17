pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: env.GIT_BUILD_REF]],
        userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]])
      }
    }
    stage('安装依赖') {
      steps {
        sh 'npm install'
      }
    }
    stage('单元测试') {
      steps {
        sh 'npm test'
      }
    }
    stage('推送镜像') {
      steps {
        sh "docker build -t ${ARTIFACT_IMAGE}:release-${env.CI_BUILD_NUMBER} ."
        script {
          docker.withRegistry("https://${ARTIFACT_BASE}", "${env.DOCKER_REGISTRY_CREDENTIALS_ID}") {
            docker.image("${ARTIFACT_IMAGE}:release-${env.CI_BUILD_NUMBER}").push()
          }
        }

      }
    }
  }
  environment {
    ENTERPRISE = 'ci-cd'
    PROJECT = 'eshop'
    ARTIFACT = 'release'
    CODE_DEPOT = 'eshop'
    ARTIFACT_BASE = "${ENTERPRISE}-docker.pkg.coding.net"
    ARTIFACT_IMAGE = "${ARTIFACT_BASE}/${PROJECT}/${ARTIFACT}/${CODE_DEPOT}"
  }
}