import express, {Request, Response} from "express"
import "dotenv/config"
import { teste } from "./controladores/controladores"


const app = express()

app.get("/", teste)

app.listen(process.env.PORT)