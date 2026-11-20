import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDay, menuSchedules } from "../schedule/load.js"

const form = document.querySelector("form")
const clientName = document.querySelector("#client")
const petName = document.querySelector("#name-pet")
const inputArea = document.querySelector("#description")
const appointmentDate = document.getElementById("appointment-date")
const selectedOption = document.querySelector("#hours")


// data atual pra o input - para deixar dinâmico com base no dia atual.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

document.querySelectorAll('input[type="date"]').forEach((selectedDate) => {
    selectedDate.value = inputToday
    selectedDate.min = inputToday
});

form.onsubmit = async (event) => {
    event.preventDefault()


    try {
        const name = clientName.value.trim()
        if (!name) {
            return alert("Informe o nome do cliente!")
        }  
            
        const pet = petName.value.trim()
        if(!pet) {
            return alert("Informe o nome do pet")
        }

        const descriptionService = inputArea.value
        if(!descriptionService) {
            return alert("Informe o serviço do cliente.")
        }

        const hourSelected = selectedOption.value
        if(!hourSelected) {
            return alert("Selecine a hora.")
        }
        
        const [hour] = hourSelected.split(":")

        const when = dayjs(appointmentDate.value).add(hour, "hour")

        const id = new Date().getTime()

        await scheduleNew({ id, name, pet, descriptionService, when})
        await scheduleDay()
        await menuSchedules()

        //limpa o input de nome do cliente
        clientName.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }


}





