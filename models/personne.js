const mongoose = require('mongoose')
let personSchema = mongoose.Schema({
    nom :{
        type : String,
        require : true,
        unique : true
    },
    age : Number,
    platsFavoris : [{type : String,unique : true}]   // platsFavoris : [String] or mixed
})

module.exports = mongoose.model('personne',personSchema)