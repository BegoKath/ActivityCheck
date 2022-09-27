const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function(req, res){
    controller.getCourses()
    .then((courseList) => {
        response.success(req, res, courseList, 200);
    })
    .catch (e => {
        response.error(req, res, 'Unexpected error', 500, e);
    })
});


router.post('/', function(req, res){
   
    controller.addCourse(req.body.tittle, req.body.description, req.body.url, req.body.author)
    .then((fullCourse) => {
        response.success(req, res, fullCourse, 201);
    })
    .catch (e =>{
        response.error(req, res, 'Informacion invalida', 400, 'Error en controlador');
    });

});

router.patch('/:id', function(req, res){
    controller.updateCourse(req.params.id, 
        req.params.tittle, )
        // req.params.description, 
        // req.params.url, 
        // req.params.author)
    .then((data) =>{
        response.success(req, res, data, 200);
    })
    .catch (e => {
        response.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/:id', function(req, res){
    controller.deleteCourse(req.params.id)
    .then (() => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Error interno', 500, e);
    });
})
module.exports = router;