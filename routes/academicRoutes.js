const academicController = require('../controllers/academicController');

module.exports = [
  {
    method: 'POST',
    path: '/api/academic/publish',
    options: {
      handler: academicController.publishAcademicMessage,
    },
  },
];