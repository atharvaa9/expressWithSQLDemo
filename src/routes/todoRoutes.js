import express from 'express'
import db from '../db.js'

const router = express.Router()
// get all todos for a logged in user
router.get('/',(req,res)=>{
    const getTodos = db.prepare(`SELECT * FROM todos WHERE user_id = ?`)
    const todos = getTodos.all(req.userId)
    res.json(todos)
})
// create a new todo
router.post('/',(req, res)=>{
    const { task } = req.body
    const addTodos = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`)
    const result = addTodos.run(req.userId, task)
    res.json({id: result.lastInsertRowid, task, completed: 0})
})
//update a todo
router.put('/:id',(req,res)=>{
    const { id } = req.params
    const { completed } = req.body

    const updatedTodo = db.prepare('UPDATE todos SET completed = ? WHERE id = ?')
    updatedTodo.run(completed,id)
    res.json({
        msg:"Todo Completed"
    })

})
//delete a todo DONT USE THIS INSTEAD USE SOFT DELETE
router.delete('/:id',(req,res)=>{
    const { id } = req.params
    const { userId } = req
    const deletedTodo = db.prepare('DELETE FROM todos WHERE id = ? AND user_id = ?')
    deletedTodo.run(id, userId)
    res.json({
        msg:"Todo Deleted"
    })
}) 


export default router;