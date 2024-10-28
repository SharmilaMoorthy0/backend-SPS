// controllers/game.controller.js

const pool = require("../modal/game.schema");


const Game = async (req, res) => {
    const { player1, player2, score1, score2, rounds } = req.body;
    
    try {
        const result = await pool.query( `INSERT INTO sharmila (player1, player2, score1, score2, rounds)
        VALUES ($1, $2, $3, $4, $5)`,[player1, player2, score1, score2, rounds])
        if(!result){
            return  res.json({ status: 0, message:"Game  not saved" });
        }
        res.json({ status: 1, message:"Game saved" });
    } catch (error) {
         console.log("game.controller.js/Game-->error", error)
    }
};

const allgame = async (req, res) => {
    
    try {
        const result = await pool.query( 'SELECT * FROM sharmila;');
        if(!result){
            return   res.json({ status: 1, message: "Error fetching games"})
        }
        res.json({ status: 1, games: result.rows });
    } catch (error) {
        console.log("game.controller.js/allgame-->error", error)
    }
};

const Delete = async (req, res) => {
    const { id } = req.params;
    
    try {
        const result = await pool.query('DELETE FROM sharmila WHERE id = $1 ', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ status: 0, message: "Game not found" });
        }
        if(!result){
            return  res.json({ status: 1, message: "Error deleting game" });
        }
        res.json({ status: 1, message: "Game deleted successfully" });
    } catch (error) {
       console.log("game.controller.js/Delete-->error", error)
    }
};

module.exports = { Game, allgame, Delete };
