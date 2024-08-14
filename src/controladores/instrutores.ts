import { Request, Response } from "express"

type Tinstrutores = {

        id: number
        nome: string
        email: string
}

const instrutores: Tinstrutores[] = [
        {

          id: 1,
          nome: "Samuel",
          email: "Samuel@email.com" 

        },  
        {

          id: 2,
          nome: "Maria",
          email: "Maria@email.com"

        }

]


export const listar = (req: Request, res: Response) => {

    return res.status(200).json(instrutores)
}