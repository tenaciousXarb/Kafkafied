const Hapi = require('@hapi/hapi');
const routes = require('./routes/index');
const { Kafka } = require('kafkajs');
const classService = require('./services/classService');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    const kafka = new Kafka({
        clientId: 'kafkafied-app',
        brokers: ['localhost:9092']
    });

    server.app.kafka = kafka;

    server.ext('onPreStart', async (server) => {
        console.log('INIT: Starting Kafka consumer');
        await classService.consumeMessages(server.app.kafka, 'academic-topic');
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();