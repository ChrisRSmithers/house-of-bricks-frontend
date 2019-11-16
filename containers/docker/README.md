# Docker Images

## Docker Compose

For local testing and managing docker images

### Basic

#### Start All Services
```bash
$ docker-compose start
```

#### Start A Single Service
```bash
$ docker-compose start <service_name>
```

#### Stop All Services
```bash
$ docker-compose stop
```

#### Stop A Single Service
```bash
$ docker-compose stop <service_name>
```

#### Start And Attach to All Services
```bash
$ docker-compose up
```

#### Start And Attach to A Single Service
```bash
$ docker-compose up <service_name>
```

#### Pull Images
```bash
$ docker-compose pull
```

### Advanced

#### Stop And Remove Containers
```bash
$ docker-compose down
```

#### Remove Stopped Containers
```bash
$ docker-compose rm
```
