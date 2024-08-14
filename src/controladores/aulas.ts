import { Request, Response } from "express"
import bancodeDados from "../bancodeDados"

export const cadastrarAula = (req: Request, res: Response) => {

    const { id }  = req.params
    const {nome} = req.body

    const instrutor = bancodeDados.instrutores.find((item) => {

        return item.id === Number(id)
  })


    if(!instrutor){

        return res.status(404).json({

            mensagem: "instrutor não encontrado(a)"
        })
    }

    const novaAula = {

        id: bancodeDados.proximoIndentificadorAula++,
        nome
    }

        if(instrutor.aulas){

            instrutor.aulas.push(novaAula)  
            return res.status(201).json(novaAula) 
        }

        instrutor.aulas = [novaAula]
        return res.status(201).json(novaAula)

 }