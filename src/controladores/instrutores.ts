import { Request, Response } from "express"
import  bancodeDados from "../bancodeDados"



export const listar = (req: Request, res: Response) => {

    return res.status(200).json(bancodeDados.instrutores)
}

export const detalhar = (req: Request, res: Response) => {

  const { id } = req.params
  
  const instrutor = bancodeDados.instrutores.find((item) => {

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

        id:  bancodeDados.proximoIndentificador++,
        nome,
        email, 
    }

    bancodeDados.instrutores.push(novoInstrutor)

       

    return res.status(201).json(novoInstrutor)
    

}

export const editar = (req: Request, res: Response) => {
  
  const { id } = req.params
  const {nome, email} = req.body

  const instrutor = bancodeDados.instrutores.find((item) => {

    return item.id === Number(id)
})


if(!instrutor){

    return res.status(404).json({

        mensagem: "instrutor não encontrado(a)"
    })
}

  instrutor.nome = nome
  instrutor.email = email


     

  return res.status(204).send()
  

}

export const excluir = (req: Request, res: Response) => {
  
  const { id } = req.params
  

  const instrutorIndice = bancodeDados.instrutores.findIndex((item) => {

    return item.id === Number(id)
})


if(instrutorIndice === -1){

    return res.status(404).json({

        mensagem: "instrutor não encontrado(a)"
    })
}

bancodeDados.instrutores.splice(instrutorIndice, 1)

  return res.status(204).send()
  

}

export const atualizarEmail = (req: Request, res: Response) => {
  
  const { id } = req.params
  const {email} = req.body

  const instrutor = bancodeDados.instrutores.find((item) => {

    return item.id === Number(id)
})


if(!instrutor){

    return res.status(404).json({

        mensagem: "instrutor não encontrado(a)"
    })
}

 
  instrutor.email = email


     

  return res.status(204).send()
  

}



