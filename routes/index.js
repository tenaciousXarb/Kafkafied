const academicRoutes = require('./academicRoutes');
const classRoutes = require('./classRoutes');

module.exports = [
    ...academicRoutes,
    ...classRoutes
];