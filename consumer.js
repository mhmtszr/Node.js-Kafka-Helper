const { Kafka } = require("kafkajs");

const topic_name = process.argv[2];
const groupId = process.argv[3];

(async () => {
  try {
    const kafka = new Kafka({
      clientId: "kafka_client",
      brokers: ["192.168.1.26:9092"],
    });
    const consumer = kafka.consumer({
      groupId: groupId,
    });
    await consumer.connect();

    await consumer.subscribe({
      topic: topic_name,
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `Coming Message ${result.message.value}, Par => ${result.partition}`
        );
      },
    });
  } catch (error) {
    console.error(error);
  }
})();
