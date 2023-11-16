# Docker - Commands

## Index

-   [Images](#images)
-   [Containers](#containers)
-   [Networks](#networks)
-   [Docker-compose](#docker-compose)

---

To run docker without sudo

```bash
sudo usermod -aG docker $USER
newgrp docker #Refresh the terminal
```

## Images

#### Search & Download

```bash
docker search <image_name>
docker pull <image_name>
```

#### Listing images

```bash
docker images
docker image ls
```

#### Deleting images

```bash
docker rmi <image_id>
docker rmi $(docker images -q) # Delete all images
docker image prune # Delete unused images
```

#### Building images

```bash
docker build -t <image_name> . # Build from a Dockerfile in the current directory
```

## Containers

#### Listing containers

```bash
docker ps
docker ps -a
```

#### Deleting containers

```bash
docker rm <container_id>
docker rm $(docker ps -aq) | docker prune # Delete all stopped containers
```

#### Running containers

```bash
docker run <image_name>
docker run
	-d # Detach
	--env | -e MY_VARIABLE=value # ENV variables
	-i # Interactive
	--name # Assign a name
	--network | --net # Connect container to a network
	-p [host]:[container] # Publish a container's port to the host
	-v
		/path/on/host:/path/in/container # Mount a directory from your machine
		volume_name:/path/in/container # Mount a volume
```

## Networks

```bash
docker network create --driver bridge <network_name>
docker network ls
docker network inspect <network_name>
docker network connect | disconnect <network_name>
```

## Docker-compose

```bash
docker-compose build # Create images
docker-compose up -d # Run the images and create containers
docker-compose down # Stop the containers
docker-compose down --rmi all # Stop containers and remove all images
docker-compose ps
```
