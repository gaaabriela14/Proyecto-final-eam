let User = require('../models/User')


let UserController = {
//Buscar un user por id
find(req,res){
    User.findById({
        _id:req.params.id
    })
    .then(doc=>{
        res.json(doc)
    }).catch(err=>{
        res.json(err)
    })
},
//Crear user
    store(req,res){
        User.create({
            name:req.body.name,
            lastname:req.body.lastname,
            adress:req.body.adress,
            email:req.body.email,
            phone:req.body.phone
        }).then(doc=>{
            res.json(doc)
        }).catch(err=>{
            res.json(err)
        })
    },

 
}

module.exports = UserController;
