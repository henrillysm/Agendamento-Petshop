import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde, e noite.

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
    try {

        periodMorning.replaceChildren()
        periodAfternoon.replaceChildren()
        periodNight.replaceChildren()


        dailySchedules.forEach(schedule => {
            const li = document.createElement("li")
            const divInfo = document.createElement("div")
            const time = document.createElement("strong")
            const divTutor = document.createElement("div")
            const h3 = document.createElement("h3")
            const name = document.createElement("span")
            const pService = document.createElement("p")
            const btnRemove = document.createElement("button")

            li.setAttribute("data-id", schedule.id)
            btnRemove.setAttribute("aria-label", "Remover agendamento")

            divInfo.classList.add("schedule-info")
            divTutor.classList.add("schedule-pet-tutor")
            pService.classList.add("schedule-service")
            btnRemove.classList.add("remove-schedule")

            time.textContent = dayjs(schedule.when).format("HH:mm")
            h3.textContent = schedule.pet
            name.textContent = `/ ${schedule.name}` 
            pService.textContent = schedule.descriptionService
            btnRemove.textContent = "Remover agendamento"

            h3.appendChild(name)
            divTutor.appendChild(h3)
            divInfo.append(time, divTutor, pService)

            li.append(divInfo, btnRemove)

            const hour = dayjs(schedule.when).hour()

            if (hour <= 12) {
                periodMorning.appendChild(li)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(li)
            } else {
                periodNight.appendChild(li)
            }

        });
    

    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}
