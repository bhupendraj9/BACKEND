const express= require('express');
//*defining the router
const router= express.Router();

//*importing the controllers
const createTodo=require('../controllers/createTodo');
const deleteTodo = require('../controllers/deleteTodo');
const getTodo = require('../controllers/getTodo');
const getTodoByID = require('../controllers/getTodoByID');
const updateTodo = require('../controllers/updateTodo');

//*defining the mapping of routes and controllers
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoByID);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

//*exporting the routes
module.exports =router;