const publishMessage = async (kafka, topic, message) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
  await producer.disconnect();
};

const getSampleMessage = () => ({
  id: Math.floor(Math.random() * 1000),
  type: 'academic_record',
  timestamp: new Date().toISOString(),
});

module.exports = {
  publishMessage,
  getSampleMessage,
};