const mongoose = require('mongoose')
require('dotenv').config()
let personne = require('./models/personne')
URI = process.env.MONGO_URI
mongoose.connect ( URI , { useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=> console.log('le serveur est en cours d\'execution...'))
.catch((error)=> console.error('Erreur de connexion'))
let mbaye = new personne({
    nom : 'Ababacar DIOKHANE',
    age : 25,
    platsFavoris : ['thon','Sombi','Thieb']
})
mbaye.save(function(err,data){
    if(err)
    console.error(err)
    console.log('mbaye est créé')
})
let arrayOfPersonne =  [{nom : 'Mame Diarra DIOKHANE',age : 21,platsFavoris : ['mafé','thieb','mbakhalou saloum']},
                        {nom : 'Ndeye Astou DIOKHANE',age : 17,platsFavoris : ['sandwitch a la viande','kaldou','domodaa']},
                        {nom : 'Seynabou DIOKHANE',age : 13,platsFavoris : ['soupou kandia','sauce de poulet','domodaa']},
                        {nom : 'Ndeye Penda Dione',age : 21,platsFavoris :['burger','cous-cous marocain','thieb']}]
personne.create(arrayOfPersonne,function(err,data){
    if(err)
        console.error(err)
    else
        console.log('array of personne est créé')
})
personne.find(function(err,data){
    if(err)
        console.error(err)
    else
        console.log(`Affiché toute la base de données :${data}`)
})
personne.findOne({platsFavoris : 'mafé'},function(err,data){
    if(err)
        console.error(err)
    else
        console.log(`Recherche par Plats favoris :${data}`)
})
let id = mongoose.Types.ObjectId("63bd7d03c63be9ae07a27eaf")
personne.findById(id,function(err,data){
    if(err)
        console.error(err)
    else
        console.log(`Recherche par Id :${data}`)
})
let id1 = mongoose.Types.ObjectId("63bd7d03c63be9ae07a27eb1")
personne.findById(id1,function(err,data){
    if(err)
        console.error(err)
    else{
        data.platsFavoris.push('hamburger')
    }
    data.save()
    console.log(`Afficher le profil modifié : ${data}`)
})