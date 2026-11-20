import { scheduleDay, menuSchedules } from "../schedule/load.js"



const selectedDate = document.getElementById("appointment-date")
const menuDate = document.getElementById("date")

selectedDate.addEventListener("change", () => {
    scheduleDay()
})


menuDate.addEventListener("change", () => {
    menuSchedules()
})