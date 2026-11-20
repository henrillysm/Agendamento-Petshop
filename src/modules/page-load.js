import { scheduleDay, menuSchedules } from "./schedule/load.js"

document.addEventListener("DOMContentLoaded", function() {
    scheduleDay()
    menuSchedules()
})