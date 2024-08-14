"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarEmail = exports.excluir = exports.editar = exports.cadastrar = exports.detalhar = exports.listar = void 0;
const bancodeDados_1 = __importDefault(require("../bancodeDados"));
const listar = (req, res) => {
    return res.status(200).json(bancodeDados_1.default.instrutores);
};
exports.listar = listar;
const detalhar = (req, res) => {
    const { id } = req.params;
    const instrutor = bancodeDados_1.default.instrutores.find((item) => {
        return item.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({
            mensagem: "instrutor não encontrado(a)"
        });
    }
    return res.status(200).json(instrutor);
};
exports.detalhar = detalhar;
const cadastrar = (req, res) => {
    const { nome, email } = req.body;
    const novoInstrutor = {
        id: bancodeDados_1.default.proximoIndentificador++,
        nome,
        email,
    };
    bancodeDados_1.default.instrutores.push(novoInstrutor);
    return res.status(201).json(novoInstrutor);
};
exports.cadastrar = cadastrar;
const editar = (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const instrutor = bancodeDados_1.default.instrutores.find((item) => {
        return item.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({
            mensagem: "instrutor não encontrado(a)"
        });
    }
    instrutor.nome = nome;
    instrutor.email = email;
    return res.status(204).send();
};
exports.editar = editar;
const excluir = (req, res) => {
    const { id } = req.params;
    const instrutorIndice = bancodeDados_1.default.instrutores.findIndex((item) => {
        return item.id === Number(id);
    });
    if (instrutorIndice === -1) {
        return res.status(404).json({
            mensagem: "instrutor não encontrado(a)"
        });
    }
    bancodeDados_1.default.instrutores.splice(instrutorIndice, 1);
    return res.status(204).send();
};
exports.excluir = excluir;
const atualizarEmail = (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const instrutor = bancodeDados_1.default.instrutores.find((item) => {
        return item.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({
            mensagem: "instrutor não encontrado(a)"
        });
    }
    instrutor.email = email;
    return res.status(204).send();
};
exports.atualizarEmail = atualizarEmail;
