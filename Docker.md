# Docker - Commands

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

#### List local images

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

## Docker-compose

```bash
docker-compose build # Create images
docker-compose up -d # Run the images and create containers
docker-compose down # Stop the containers
docker-compose down --rmi all # Stop containers and remove all images
docker-compose ps
```
