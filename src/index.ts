import express, {Request, Response} from "express"
import "dotenv/config"


const app = express()

app.get("/", (req:Request , res:Response) => {

    res.send("Funcionou!")

})

app.listen(process.env.PORT)