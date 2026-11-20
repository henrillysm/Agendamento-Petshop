const dialog = document.getElementById('appointment-dialog');
const btnSchedule = document.querySelector('.btnSchedule');
const btnClose = dialog.querySelector('.cancel-icon');


btnSchedule.addEventListener("click", () => dialog.showModal());
btnClose.addEventListener("click", () => dialog.close());
