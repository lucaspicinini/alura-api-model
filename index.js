// importe a biblioteca inserindo a linha abaixo no topo do seu index.js
// coloque o caminho do arquivo da biblioteca no seu projeto
import { data, id, courseProgresses, guides } from "./aluraApiModel.js";

// Essa biblioteca abstrai a requisição à API para você e lhe dá acesso a 4 promises:
// -> data, id, courseProgresses e guides <-. Abaixo vamos ver todo o conteúdo retornado por elas.

// Não vamos nos aprofundar em Promises, pois a intenção é abstrair o uso ao máximo,
// para que iniciantes possam experimentar dados dinâmicos em suas páginas.
// Em resumo, o padrão de uso da biblioteca é:

// PROMISEQUEVOCÊQUERUSAR.then((respostaDaApi) => {
//     // aqui você faz o que achar melhor com o parâmetro respostaDaApi
//     console.log(respostaDaApi)
// })

// Exemplo de uso:

id.then((respostaDaApi) => {
    // Nesta Promise, respostaDaApi sempre retorna o id do aluno. Ex:
    document.getElementById("meuId").innerHTML = `Meu ID na Alura: ${respostaDaApi}`
})

courseProgresses.then((respostaDaApi) => {
    // Nesta Promise, respostaDaApi é um array, que pode conter um ou mais de um curso.
    // o [0] acessa diretamente o primeiro curso da lista.
    // as propriedes que você pode usar em cada curso são:

    // finished (retorna true ou false), id (id do curso),
    // lastAccessTime (retorna o último acesso em ms),
    // name (nome do curso), progress (numero com o progresso aproximado),
    // readyToFinish (retorna true ou false),
    // slug (slug do curso). Ex:
    document.getElementById("nomeDoCurso").innerHTML = `Curso: ${respostaDaApi[0].name}`
    document.getElementById("progressoDoCurso").innerHTML = `Progresso: ${respostaDaApi[0].progress}%`
    const date = new Date(respostaDaApi[0].lastAccessTime)
    document.getElementById("ultimoAcesso").innerHTML = `Meu último acesso: ${date}`
})

guides.then((respostaDaApi) => {
    // Nesta Promise, respostaDaApi é um array, que pode conter um ou mais de um guia de estudos.
    // o [0] acessa diretamente o primeiro guia da lista.
    // as propriedes que você pode usar em cada guia são:

    // author (author do guia), id (id do guia),
    // totalCourses (numero com total de cursos),
    // finishedCourses (número com os cursos finalizados),
    // totalSteps (numero com total de etapas do guia),
    // finishedSteps (número com as etapas finalizadas),
    // lastAccessTime (retorna o último acesso em ms),
    // name (nome do guia), url (url do guia), color (cor do guia)
    // code (code do guia), kind (formação do aluno). Ex:
    document.getElementById("nomeDoGuia").innerHTML = `Nome do Guia: ${respostaDaApi[0].name}`
    document.getElementById("totalCursos").innerHTML = `Total de cursos: ${respostaDaApi[0].totalCourses}`
    document.getElementById("cursosFinalizados").innerHTML = `Cursos Finalizados: ${respostaDaApi[0].finishedCourses}`
    document.getElementById("totalEtapas").innerHTML = `Etapas do Guia: ${respostaDaApi[0].totalSteps}`
    document.getElementById("etapasFinalizadas").innerHTML = `Etapas finalizadas: ${respostaDaApi[0].finishedSteps}`
})

// a Promise data não está sendo utilizada aqui, mas está disponível.
// ela retorna toda a resposta da api, contendo inclusive as promises
// id, courseProgresses e guides em sua resposta. Você pode acessá-la
// caso precise de uma manipulação de dados mais específica, mas no geral
// no será necessário.