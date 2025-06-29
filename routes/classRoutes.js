const classController = require('../controllers/classController');

module.exports = [
  {
    method: 'GET',
    path: '/api/class/start-consumer',
    options: {
      handler: classController.startConsumer
    },
  },
];