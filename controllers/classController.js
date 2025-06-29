const classService = require('../services/classService');

const startConsumer = async (request, h) => {
    console.log('GET API: Class Controller - startConsumer');
    await classService.consumeMessages(request.server.app.kafka, 'academic-topic');
    return { status: 'Consumer started' };
};

module.exports = {
    startConsumer,
};