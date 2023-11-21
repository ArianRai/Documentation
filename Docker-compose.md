# Docker-compose

> For docker, see [docker.md](https://github.com/ArianRai/Documentation/blob/main/Docker.md)

#### Creating images from `docker-compose.yml`

```bash
$ docker-compose build -t . # path of the docker-compose.yml
```

#### Running containers from images

```bash
docker-compose up -d # Run the images and create containers
docker-compose down # Stop the containers
docker-compose down --rmi all # Stop containers and remove all images
```

#### Listing running containers

```bash
$ docker-compose ps
```

## docker-compose.yml

Example of a `docker-compose.yml` file

>     version: "3.12"
>
>     services:
>
>     	client:
>     		build: ./app-client
>     		container_name: client
>     		ports: - "5173:5173"
>     		networks: - front-end
>
>     	server:
>     		build: ./app-server
>     		container_name: server
>     		command: node server.js
>     		ports:
>     			- "5005:5005"
>     		networks:
>     			- back-end
>
>     	mongo:
>     		image: mongo
>     		restart: always
>     		enviroment:
>     			MONGO_ROOT_USERNAME: root
>     			MONGO_ROOT_PASSWORD: example
>     		ports:
>     			- "27017:27017"
>     		networks:
>     			- back-end
>
>     networks:
>     	front-end:
>     		driver:bridge
>     	back-end:
>     		driver:bridge
