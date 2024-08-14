"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instrutores_1 = require("./controladores/instrutores");
const aulas_1 = require("./controladores/aulas");
const rotas = (0, express_1.Router)();
// listar todos os instrutores
rotas.get("/instrutores", instrutores_1.listar);
// detalhar as informacoes de um instrutor
rotas.get("/instrutores/:id", instrutores_1.detalhar);
// cadastrar instrutor
rotas.post("/instrutores", instrutores_1.cadastrar);
// editar instrutor 
rotas.put("/instrutores/:id", instrutores_1.editar);
rotas.patch("/instrutores/:id/alterar", instrutores_1.atualizarEmail);
// excluir instrutor
rotas.delete("/instrutores/:id", instrutores_1.excluir);
// cadastrar uma aula para um instrutor
rotas.post("/instrutores/:id/aulas", aulas_1.cadastrarAula);
// excluir uma aula para um instrutor
rotas.delete("/instrutores/:id/aulas/:idAula", aulas_1.excluirAula);
exports.default = rotas;
