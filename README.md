# Node.js-Kafka-Helper

Example logging usage of Kafka on Node.js.

### Run Kafka and Zookeeper from Docker

Needed [Docker](https://www.docker.com/products/docker-desktop).

Run Zookeeper image.

```
docker run --name zookeeper -p 2181:2181 zookeeper
```

Run Kafka image and bind to Zookeeper.(You should use your local IP address)

```
docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.26:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.26:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
```

### Run the Node.js Code

Get packages.

```
npm install
```

Create topics.

```
node topic.js
```

Run a consumer to listen logs.

```
node consumer.js [topic_name] [groupId]
```

Run producer to create logs.

```
node producer.js [topic_name] [partition]
```

> :warning: **HINT** :warning::
>
> - If you want to use Kafka as a queue such as RabbitMQ use same same groupId for consumers.
> - If you want to use Kafka as a pub/sub such as Redis Pub/sub use different groupId for consumers.
