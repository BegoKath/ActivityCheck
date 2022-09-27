const Model = require('./model');

//mongodb+srv://user_example:123prueba@cluster0.byrmpb0.mongodb.net/back_example_db

 function addCourse(course){
    // list.push(course);
    const myCourse = new Model(course);
    myCourse.save();
}

async function getCourse(){
    const courses = await Model.find();
    return courses;
}

async function updateCourse(id, tittle){
    const foundCourse = await Model.findById({
        _id: id
    });
    foundCourse.tittle = tittle;
    // foundCourse.description = description;
    // foundCourse.url = url;
    // foundCourse.author = author;

    const newCourse = await foundCourse.save();
    return newCourse;
}

function removeCourse(id){
    return Model.deleteOne({
        _id: id
    });
}
module.exports = {
    add: addCourse,
    list: getCourse,
    update: updateCourse,
    remove: removeCourse,
}