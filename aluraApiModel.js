const url = "https://www.alura.com.br/api/dashboard/92481cc098119616e9f2f29e301356cd1251c2f660a38b6bd126d19e4f27976f"
            // "https://www.alura.com.br/api/dashboard/VOCÊ COLOCARÁ O SEU TOKEN AQUI, APÓS O '/dashboard' DA URL"
            // Você não precisa configurar mais nada neste arquivo :). Apague estes comentários após sua configuração

const setAluraApiModel = {}

setAluraApiModel.getDataFromAlura = () => {
    return fetch(url)
            .then((response) => response.json())
            .then((dataFromAlura) => dataFromAlura)
            .catch((error) => console.error(error))
}

setAluraApiModel.getIdFromAlura = () => {
    return fetch(url)
            .then((response) => response.json())
            .then((dataFromAlura) => dataFromAlura.id)
            .then((idFromAlura) => idFromAlura)
            .catch((error) => console.error(error))
}

setAluraApiModel.getCourseProgressesFromAlura = () => {
    return fetch(url)
            .then((response) => response.json())
            .then((dataFromAlura) => dataFromAlura.courseProgresses)
            .then((courseProgressesFromAlura) => courseProgressesFromAlura)
            .catch((error) => console.error(error))
}

setAluraApiModel.getGuidesFromAlura = () => {
    return fetch(url)
            .then((response) => response.json())
            .then((dataFromAlura) => dataFromAlura.guides)
            .then((guidesFromAlura) => guidesFromAlura)
            .catch((error) => console.error(error))
}

export const data = setAluraApiModel.getDataFromAlura()
export const id = setAluraApiModel.getIdFromAlura()
export const courseProgresses = setAluraApiModel.getCourseProgressesFromAlura()
export const guides = setAluraApiModel.getGuidesFromAlura()