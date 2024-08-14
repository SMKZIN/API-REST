import {Router} from "express"
import { listar } from "./controladores/instrutores"

const rotas = Router()



// listar todos os instrutores

rotas.get("/instrutores", listar)



// detalhar as informacoes de um instrutor
// cadastrar instrutor
// editar instrutor 
// excluir instrutor

// cadastrar uma aula para um instrutor
// excluir uma aula para um instrutor

export default rotas