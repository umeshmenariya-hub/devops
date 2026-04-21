pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            echo 'Building message'
          }
        }

        stage('Test') {
          steps {
            echo 'Testing Phase'
          }
        }

      }
    }

    stage('End') {
      steps {
        echo 'Ending'
      }
    }

  }
}