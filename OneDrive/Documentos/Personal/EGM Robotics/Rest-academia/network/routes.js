const express = require('express');
const courses = require('../components/courses/network');

const routes = function(server){
    server.use('/courses', courses);
}

module.exports = routes;