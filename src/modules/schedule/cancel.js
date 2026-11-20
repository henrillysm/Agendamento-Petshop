import { scheduleDelete } from "../../services/schedule-delete.js"
import { scheduleDay, menuSchedules } from "./load.js"
const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("remove-schedule")) {
            const li = event.target.closest("li")
            const { id } = li.dataset

            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm) {
                    await scheduleDelete({ id })
                    await scheduleDay()
                    await menuSchedules()
                };
            };
        };
    });
});
                
                

                    


        


