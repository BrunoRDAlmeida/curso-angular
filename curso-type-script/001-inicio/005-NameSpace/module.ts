/*
    Resumidamente os módulos em JavaScript ou Typescript é uma forma de você
    compartilar informações esntre arquivos, dessa forma, todos os arquivos
    que realizaram a importação desse módulo poderão utilizar e usufluir
    de suas funções ou informaações que foram exportadas

    import = Importa informações de uma classe, namespace, const, let, etc
    export = Exporta para outras pessoas consumirem informações
*/

import { Pessoa1 } from "./pessoa1"
import { Pessoa } from "./namespace-aninhados"

export { Pessoa1, Pessoa}