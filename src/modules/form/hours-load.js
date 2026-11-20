import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const select = document.querySelector("#hours")

export function hoursLoad({ date, dailySchedules }) {

    //limpa a lista de horários
    select.replaceChildren()

    //Obtém os horários ocupados
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        // Recupera somente a hora - retorna um Number
        const [scheduleHour] = hour.split(":")
    
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
        const available = !unavailableHours.includes(hour) && !isHourPast

        return {
                hour,
                available,
            }
            
    });

    //renderiza os horários
    opening.forEach(({ hour, available }) => {
        const option = document.createElement("option")
        
        option.value = hour
        option.textContent = available ? hour : `${hour}(indisp.)`
        option.disabled = !available

        select.append(option)
    });
    

} 


