# Kaiburr Coding Assignment

| Task    | Status |
| -------- | ------- |
| Task 1 - REST API | ✔️ |
| Task 2 - Kubernetes | ✔️ |
| Task 3 - UI | ✔️ |
| Task 4 - CI/CD | ✔️ |
| Task 5 - Data Science | Not done |

Task 3 uses NextJS Framework

## Tasks
### Task 1 [🔗](https://github.com/arungovindm2001/kaiburr-coding-assignment/tree/main/Task-1)
Implement an application in java which provides a REST API with endpoints for searching, creating and deleting “task” objects. Each “task” object should contain the following properties:
- name (task name, string)
- id (task ID, string)
- assignee (task assignee, string)
- project (project name, string)
- startTime (task start date/time, date)
- arunGovindProperty The value of this property should be set to 5 random characters from the string “ArunGovind”. Values should be generated by the program only.

### Task 2 [🔗](https://github.com/arungovindm2001/kaiburr-coding-assignment/tree/main/Task-2)
Use the application that you created in task #1. Create [dockerfile](https://github.com/arungovindm2001/kaiburr-coding-assignment/blob/main/Code/backend/Dockerfile) and build docker image. Create [kubernetes yaml](https://github.com/arungovindm2001/kaiburr-coding-assignment/blob/main/Code/backend/deployment.yaml) manifests for the application (at least a deployment and a service). It’s
ok to expose the application with a LoadBalancer or NodePort service or with an ingress. Spin up a single-node local Kubernetes cluster (Docker Desktop, Kind or Minikube) or use a
managed cluster like EKS, AKS, GKE etc. Deploy MongoDB to the cluster (it’s ok to use a community helm chart for this, any other approach is fine as well). Then deploy the application
to the cluster by applying your manifests. The following requirements should be fulfilled:
- you can bring your application up by applying your yaml manifests
- mongodb is running in a separate pod
- the application should take mongo connection details from the environment variables
- the app endpoints should be available from your host machine
- a persistent volume should be used to store the MongoDB data. I.e., when you delete the MongoDB pod the records in the db should not disappear.

### Task 3 [🔗](https://github.com/arungovindm2001/kaiburr-coding-assignment/tree/main/Task-3)
Create a WEB UI frontend for an application that you created for Task 1 using any UI framework of your choice. You should be able to create, show, search and delete records from your UI.

### Task 4 [🔗](https://github.com/arungovindm2001/kaiburr-coding-assignment/tree/main/Task-4)
#### Repo Link: https://github.com/arungovindm2001/kaiburr-task-4-ci-cd
Create a CI-CD pipeline for a sample application (built in task 1 and/or 3 above) using any CI-CD tool of your choice like Jenkins, Azure DevOps, Gitlab, Github Actions, AWS CodePipeline or any other tool of your choice. Include a code build and a docker build step in your pipeline.
