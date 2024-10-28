const express=require('express')
const { Game, allgame, Delete } = require('../controller/game.controller')

const router=express.Router()
router.post("/new/game",Game)
router.get("/all/game",allgame)
router.delete("/delete/game/:id",Delete)

module.exports=router