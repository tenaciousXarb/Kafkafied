const academicService = require('../services/academicService');

const publishAcademicMessage = async (request, h) => {
    console.log('POST API: Academic Controller - publishAcademicMessage');
    const message = academicService.getSampleMessage();
    await academicService.publishMessage(request.server.app.kafka, 'academic-topic', message);
    return { status: 'Message published', message };
};

module.exports = {
    publishAcademicMessage,
};