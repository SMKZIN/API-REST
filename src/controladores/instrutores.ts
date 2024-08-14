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

export const detalhar = (req: Request, res: Response) => {

  const { id } = req.params
  
  const instrutor = instrutores.find((item) => {

        return item.id === Number(id)
  })


    if(!instrutor){

        return res.status(404).json({

            mensagem: "instrutor não encontrado(a)"
        })
    }


        return res.status(200).json(instrutor)
}

export const cadastrar = (req: Request, res: Response) => {
   
    const {nome, email} = req.body

    const novoInstrutor = {

        id: 3,
        nome,
        email, 
    }

     instrutores.push(novoInstrutor)

       

    return res.status(201).json(novoInstrutor)
    

}