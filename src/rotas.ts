import {Router} from "express"
import { atualizarEmail, cadastrar, detalhar, editar, excluir, listar } from "./controladores/instrutores"
import { cadastrarAula, excluirAula } from "./controladores/aulas"

const rotas = Router()



// listar todos os instrutores
rotas.get("/instrutores", listar)

// detalhar as informacoes de um instrutor
rotas.get("/instrutores/:id", detalhar)

// cadastrar instrutor
rotas.post("/instrutores", cadastrar)

// editar instrutor 
rotas.put("/instrutores/:id", editar)
rotas.patch("/instrutores/:id/alterar", atualizarEmail)

// excluir instrutor
rotas.delete("/instrutores/:id", excluir)

// cadastrar uma aula para um instrutor
rotas.post("/instrutores/:id/aulas", cadastrarAula)


// excluir uma aula para um instrutor
rotas.delete("/instrutores/:id/aulas/:idAula", excluirAula)

export default rotas