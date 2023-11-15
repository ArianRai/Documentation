# Docker - Commands

To run docker without sudo

```bash
sudo usermod -aG docker $USER
newgrp docker #Refresh the terminal
```

## Images

List local images

```bash
docker images
docker image ls
```

Building images

```bash
docker build -t <image_name>
```

## Docker-compose

```bash
docker-compose build # Create images
docker-compose up -d # Run the images and create containers
docker compose down # Stop the containers
docker compose down --rmi all # Stop containers and remove all images
```
