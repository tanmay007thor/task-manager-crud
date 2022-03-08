const Task = require('../models/task')


const getAllTasks = async (req  , res) =>{
   try{
       const tasks = await Task.find({})
       res.status(200).send({tasks : tasks})
   }catch(error){
    res.status(500).send({msg  : error})
   }
}

const createTasks = async (req , res) =>{
    
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})

    }catch(error){
        res.status(500).send({msg  : error})
    }
}
const getTask = async (req , res) =>{
    try {
        const {id : taskID} = req.params
        const task = await Task.findOne({_id : taskID})

        if(!task){
            return res.status(404).send({msg : `no task with id : ${taskID} ` })
        }
        res.status(200).json({task})
    }catch(error) {
        res.status(500).send({msg : error})
    }
}
const updateTasks = async (req , res) =>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id : taskID } , req.body , {
            new : true ,
            runValidators : true 
        })

        if(!task){
            return res.status(404).send({msg : `no task with the id of ${taskID} for update !`})
        }
        res.status(200).send({task})
    }catch(error){
        res.status(500).send({msg : error})
    }
}
const deleteTasks = async  (req , res) =>{
    try {
        const {id : taskID} = req.params ;
        const task = await Task.findOneAndDelete({_id : taskID})
        if(!task) {
            return res.status(400).send({msg : `no task avialable to delete with id : ${taskID}`})
        }
        res.status(200).send({task})
    }catch(error){
        res.status(500).send({msg : error})
    }
}       



module.exports = {
    getAllTasks , createTasks , getTask , updateTasks , deleteTasks
}