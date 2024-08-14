"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bancodeDados = {
    proximoIndentificador: 3,
    proximoIndentificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: "Samuel",
            email: "Samuel@email.com",
            aulas: [
                { id: 1, nome: "aula de API Rest" }
            ]
        },
        {
            id: 2,
            nome: "Maria",
            email: "Maria@email.com",
            aulas: []
        }
    ]
};
exports.default = bancodeDados;
