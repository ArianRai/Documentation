## Kubernetes

### Commands

-   $ `kubectl [command] [type] [name] [flags]`

#### List

-   $ `kubectl get nodes` // List all nodes
-   $ `kubectl get pods` // List all the pods running
-   $ `kubectl get deploy` // List all the pods running
-   $ `kubectl get all` // List everything

-   $ `kubectl create | delete -f <path_and_name_of_file>` // Creates or deletes the k8s objects defined in the spec file
-   $ `kubectl describe pod <name_of_the_pod>` // Gives detailed description about the pod

-   $ `kubectl exec -it <name_of_the_pod> -sh` // Execute that command on the pod (using interactive cmd sh)

-   $ `kubectl scale deployment sample-node-app-deploy --replicas=5` // Scales up or down a deployment
