import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedule/show.js"
import {hoursLoad} from "../form/hours-load.js"


const selectedDate = document.querySelector("#appointment-date");

const menuDate = document.querySelector("#date")



export async function scheduleDay() {

    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    

    // Renderiza os horários disponíveis.
    hoursLoad({ date, dailySchedules })
}


export async function menuSchedules() {

    const date = menuDate.value

    // Exibe os agendamentos.
    const dailySchedules = await scheduleFetchByDay({ date })
    schedulesShow({ dailySchedules })
}