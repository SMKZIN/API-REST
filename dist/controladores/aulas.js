"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirAula = exports.cadastrarAula = void 0;
const bancodeDados_1 = __importDefault(require("../bancodeDados"));
const cadastrarAula = (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const instrutor = bancodeDados_1.default.instrutores.find((item) => {
        return item.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({
            mensagem: "instrutor não encontrado(a)"
        });
    }
    const novaAula = {
        id: bancodeDados_1.default.proximoIndentificadorAula++,
        nome
    };
    if (instrutor.aulas) {
        instrutor.aulas.push(novaAula);
        return res.status(201).json(novaAula);
    }
    instrutor.aulas = [novaAula];
    return res.status(201).json(novaAula);
};
exports.cadastrarAula = cadastrarAula;
const excluirAula = (req, res) => {
    const { id, idAula } = req.params;
    const instrutor = bancodeDados_1.default.instrutores.find((item) => {
        return item.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({
            mensagem: "instrutor não encontrado(a)"
        });
    }
    if (!instrutor.aulas) {
        return res.status(404).json({
            mensagem: "Aula nao encontrada para o instrutor informado"
        });
    }
    const aulaIndex = instrutor.aulas?.findIndex(item => {
        return item.id === Number(idAula);
    });
    if (aulaIndex === -1) {
        return res.status(404).json({
            mensagem: "Aula nao encontrada para o instrutor informado"
        });
    }
    instrutor.aulas?.splice(aulaIndex, 1);
    return res.status(204).send();
};
exports.excluirAula = excluirAula;
