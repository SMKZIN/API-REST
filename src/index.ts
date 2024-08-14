import express from "express"
import "dotenv/config"
import rotas from "./rotas"



const app = express()

// middle de json:

app.use(express.json())

app.use(rotas)

app.listen(process.env.PORT)