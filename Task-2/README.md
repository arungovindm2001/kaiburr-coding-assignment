Since I have used MongoDB Cloud Atlas, there is only a single cluster i.e. for the java spring boot application only

## Task 2

- Docker Hub Repository: [arungovindm/assessment](https://hub.docker.com/repository/docker/arungovindm/assessment)
- Image: `arungovindm/assignment:latest`
![docker hub Screenshot from 2024-01-18 20-58-49](https://github.com/arungovindm2001/kaiburr-coding-assignment/assets/67337602/06cccfe5-1690-46b7-8bf3-526697583e8f)

## Kubernetes Deployment

### 1. Build the docker image
```bash
cd <working directory>
docker build -t <image> .
```
![docker build Screenshot from 2024-01-18 17-42-06](https://github.com/arungovindm2001/kaiburr-coding-assignment/assets/67337602/293a1f20-2eba-48d6-a2ee-e7e9b6588433)

### 2.  Deploying the Spring Boot Application

```bash
kubectl apply -f deployment.yaml
```

### 3.  Verify Deployments
```bash
kubectl get pods
```

### 4. Get service url
```bash
minikube service assessment --url
```
![kubernetes Screenshot from 2024-01-18 20-33-37](https://github.com/arungovindm2001/kaiburr-coding-assignment/assets/67337602/e43b9605-f034-4dcd-8eac-bd4db508e4a9)

### 5. Accessing EndPoint
![checkApi Url Screenshot from 2024-01-18 20-29-57](https://github.com/arungovindm2001/kaiburr-coding-assignment/assets/67337602/430dbfab-39ce-4717-8074-c2c020d4a094)
