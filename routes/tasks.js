const express = require('express')
const router = express.Router();
const {getAllTasks , createTasks , updateTasks , deleteTasks , getTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)



module.exports = router