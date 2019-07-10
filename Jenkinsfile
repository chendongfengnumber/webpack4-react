pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
  }

  stages {
    stage('初始化') {
      steps {
        sh 'npm install'
      }
    }

    stage('代码检查') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('构建') {
      steps {
        echo '完成'
      }
    }
  }
}
