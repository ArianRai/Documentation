# Docker - Commands

For docker-compose, see [Docker-compose](#https://github.com/ArianRai/Documentation/blob/main/Docker-compose.md)

## Index

-   [Images](#images)
-   [Containers](#containers)
-   [Networks](#networks)

---

To run docker without sudo

```bash
$ sudo usermod -aG docker $USER
$ newgrp docker
```

## Images

#### Search & Download

```bash
$ docker search <image_name>
$ docker pull <image_name>
```

#### Listing images

```bash
$ docker images
$ docker image ls
```

#### Deleting images

```bash
$ docker rmi <image_id>
$ docker rmi $(docker images -q) # Delete all images (-q just gets only the ID)
$ docker image prune # Delete unused images
```

#### Building images

```bash
$ docker build -t <image_name> . # Build from a dockerfile in the current directory
```

## Containers

#### Listing containers

```bash
$ docker ps # running containers
$ docker ps -a # all
```

#### Deleting containers

```bash
$ docker rm <container_id>
$ docker rm $(docker ps -aq) | docker prune # Delete all stopped containers
```

#### Running containers

```bash
$ docker run <image_name>
$ docker run
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
$ docker network create --driver bridge <network_name>
$ docker network ls
$ docker network inspect <network_name>
$ docker network connect | disconnect <network_name>
```

## Commands

Execute a command in a running container

```bash
$ docker exec -it <container_id> bash
```

## Logs

Show the logs of a container

```bash
$ docker logs <container_id>
```
