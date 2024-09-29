const express = require('express')
const pool = require('./db')
const app = express()
const cors = require("cors")
const PORT = 3000

app.use(cors())

app.use(express.json())

app.get("/jogos", async (req,res)=>{
    try{
        const [rows] = await pool.query("SELECT * FROM jogos")
        res.json(rows)
    }catch(error){
        res.status(500).json({message: "deu ruim", error})
    }
})

app.listen(PORT, ()=>{
    console.log("deu bom")
})