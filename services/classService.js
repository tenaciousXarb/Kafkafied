const consumeMessages = async (kafka, topic) => {
  const consumer = kafka.consumer({ groupId: 'class-group' });
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Consumed message from ${topic}:`, JSON.parse(message.value.toString()));
    },
  });
};

const stopConsumer = async (kafka) => {
  const consumer = kafka.consumer({ groupId: 'class-group' });
  await consumer.disconnect();
};

module.exports = {
  consumeMessages,
  stopConsumer,
};