
type Tindentificador = number

type Taulas = {

    id: number
    nome: string

}

type Tinstrutores = {

    id: number
    nome: string
    email: string
    aulas?: Taulas[]
}


type Tbancodedados = {

    proximoIndentificador: Tindentificador
    instrutores: Tinstrutores[]
    proximoIndentificadorAula: Tindentificador

}


const bancodeDados: Tbancodedados = {

    proximoIndentificador: 3,
    proximoIndentificadorAula: 2,
    instrutores: [
        {
    
          id: 1,
          nome: "Samuel",
          email: "Samuel@email.com" ,
          aulas:  [

            {id: 1, nome: "aula de API Rest"}
        ]
        },  
        {
    
          id: 2,
          nome: "Maria",
          email: "Maria@email.com",
          aulas: []  
        }
    
    ]
}

export default bancodeDados

 

 