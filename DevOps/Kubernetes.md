## Kubernetes

### Commands

-   $ `kubectl [command] [type] [name] [flags]`

-   $ `kubectl get nodes` // List all nodes
-   $ `kubectl get pods` // List all the pods running
-   $ `kubectl describe pod <name_of_the_pod>` // Gives detailed description about the pod
-   $ `kubectl create | delete -f <path_and_name_of_file>` // Creates or deletes the k8s objects defined in the spec file

`starting-file.yml`

apiVersion: v1
kind: Pod
metadata:
name: sample-node-app
labels:
app: sample-node-app
spec:
containers: - name: sample-node-app
image: saurabhd2106/sample-node-app
ports:
containerPort: 3000
