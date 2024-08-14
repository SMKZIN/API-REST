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

 export const excluirAula = (req: Request, res: Response) => {

        const { id, idAula } = req.params

        const instrutor = bancodeDados.instrutores.find((item) => {

            return item.id === Number(id)
      })
    
    
        if(!instrutor){
    
            return res.status(404).json({
    
                mensagem: "instrutor não encontrado(a)"
            })
        }

        if(!instrutor.aulas){

            return res.status(404).json({
    
                mensagem: "Aula nao encontrada para o instrutor informado"
            })
        }



        const aulaIndex = instrutor.aulas?.findIndex(item => {

            return item.id === Number(idAula)  
        })

        if(aulaIndex === -1){
    
            return res.status(404).json({
    
                mensagem: "Aula nao encontrada para o instrutor informado"
            })
        }

            instrutor.aulas?.splice(aulaIndex, 1)

            return res.status(204).send()
  }
