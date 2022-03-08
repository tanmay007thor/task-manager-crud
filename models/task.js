const mongoose = require('mongoose')
const TaskScheema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true , 'must provide task !'] ,
        trim : true ,
        maxLength : [50 , 'name can not be more than 50 !']
    } ,
    completed : {
        type : Boolean ,
        default : false 
    }
})

module.exports = mongoose.model('Task' , TaskScheema)