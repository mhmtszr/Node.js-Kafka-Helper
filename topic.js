const { Kafka } = require("kafkajs");

(async () => {
  try {
    const kafka = new Kafka({
      clientId: "kafka_client",
      brokers: ["192.168.1.26:9092"],
    });

    const admin = kafka.admin();
    await admin.connect();
    // Create Topics
    await admin.createTopics({
      topics: [
        {
          topic: "Logs",
          numPartitions: 1,
        },
        {
          topic: "Logs2",
          numPartitions: 2,
        },
      ],
    });
    await admin.disconnect();
  } catch (error) {
    console.error(error);
  }
})();
