import { apiConfig } from "./api-config.js"


export async function scheduleDelete({ id }) {
    try {
       const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
        method: "DELETE",
    });

    // console.log(response.status, response.ok); // provavelmente 404, false
    
    if (!response.ok) {
        throw new Error("Não foi possível cancelar o agendamento!")
    }
    
    alert("Agendamento cancelado com sucesso!")
    

    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento") 
    }

    


}