## Kubernetes

## Files

-   [Pod](https://github.com/ArianRai/Documentation/blob/main/DevOps/Kubernetes/Kubernetes-files/1-sample-pod.yml)
-   [Replica Set](https://github.com/ArianRai/Documentation/blob/main/DevOps/Kubernetes/Kubernetes-files/2-sample-replica-set.yml)
-   [Deployment](https://github.com/ArianRai/Documentation/blob/main/DevOps/Kubernetes/Kubernetes-files/3-sample-deploy.yml)

### Commands

-   $ `kubectl [command] [type] [name] [flags]`

#### List

-   $ `kubectl get nodes` // List all nodes
-   $ `kubectl get pods` // List all the pods running
-   $ `kubectl get deploy` // List all the pods running
-   $ `kubectl get all` // List everything

#### Create and Delete

-   $ `kubectl create | delete -f <path_and_name_of_file>` // Creates or deletes the k8s objects defined in the spec file
-   $ `kubectl create | delete -f .` // Creates or deletes the k8s objects defined in all spec files in the current directory

---

-   $ `kubectl describe <kind> <name>` // Gives detailed description about the element

-   $ `kubectl logs <name_of_the_pod>` // Gives logs of the running pod

-   $ `kubectl exec -it <name_of_the_pod> -sh` // Execute commands on the pod (using interactive shell)

-   $ `kubectl scale deployment sample-node-app-deploy --replicas=5` // Scales up or down a deployment
