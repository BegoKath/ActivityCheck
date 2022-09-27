const store = require('./store');

function addCourse(tittle, description, url, author){
    return new Promise((resolve, reject) => {
        if(!tittle || !url){
            console.error('[messageController] No hay titulo o url');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullCourse = {
            tittle: tittle,
            description: description,
            url: url,
            author: author,
            date: new Date(),
        };

        store.add(fullCourse);
        
        console.log(fullCourse);
        resolve(fullCourse);
    });
}

function getCourses(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function updateCourse(id, tittle) {
    return new Promise( async (resolve, reject)=> {
        console.log(id);
        console.log(tittle);
        // console.log(description);
        // console.log(url);
        // console.log(author);
        if(!id || !tittle){
            reject('Invalid data');
            return false;
        }
        const result = await store.updateCourse(id, tittle)
        resolve(result);
    })
}

function deleteCourse(id){
    return new Promise((resolve, reject) =>{
        if (!id){
            reject('Id invalido');
            return false;
        }

        store.remove(id)
        .then (()=>{
            resolve();
        })
        .catch(e =>{
            reject(e);
        });
    })
}
module.exports = {
    addCourse,
    getCourses,
    updateCourse,
    deleteCourse,
}