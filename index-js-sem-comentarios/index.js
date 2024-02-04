import { data, id, courseProgresses, guides } from "../aluraApiModel.js";

id.then((respostaDaApi) => {
    document.getElementById("meuId").innerHTML = `Meu ID na Alura: ${respostaDaApi}`
})

courseProgresses.then((respostaDaApi) => {
    document.getElementById("nomeDoCurso").innerHTML = `Curso: ${respostaDaApi[0].name}`
    document.getElementById("progressoDoCurso").innerHTML = `Progresso: ${respostaDaApi[0].progress}%`
    const date = new Date(respostaDaApi[0].lastAccessTime)
    document.getElementById("ultimoAcesso").innerHTML = `Meu último acesso: ${date}`
})

guides.then((respostaDaApi) => {
    document.getElementById("nomeDoGuia").innerHTML = `Nome do Guia: ${respostaDaApi[0].name}`
    document.getElementById("totalCursos").innerHTML = `Total de cursos: ${respostaDaApi[0].totalCourses}`
    document.getElementById("cursosFinalizados").innerHTML = `Cursos Finalizados: ${respostaDaApi[0].finishedCourses}`
    document.getElementById("totalEtapas").innerHTML = `Etapas do Guia: ${respostaDaApi[0].totalSteps}`
    document.getElementById("etapasFinalizadas").innerHTML = `Etapas finalizadas: ${respostaDaApi[0].finishedSteps}`
})