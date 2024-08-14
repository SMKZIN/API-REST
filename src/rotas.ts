import {Router} from "express"
import { cadastrar, detalhar, listar } from "./controladores/instrutores"

const rotas = Router()



// listar todos os instrutores
rotas.get("/instrutores", listar)

// detalhar as informacoes de um instrutor
rotas.get("/instrutores/:id", detalhar)

// cadastrar instrutor
rotas.post("/instrutores", cadastrar)

// editar instrutor 
// excluir instrutor

// cadastrar uma aula para um instrutor
// excluir uma aula para um instrutor

export default rotas