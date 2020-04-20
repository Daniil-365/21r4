const button = document.getElementById('submit')
const input = document.getElementById('in')
let mail = /[-.\w]+@([\w-]+\.)+[\w-]+/g
function checker() {
    if (input.value.replace(/ /g, "").match(mail)) {
        input.style.borderColor = "lightgreen"
        localStorage.setItem("email", input.value)
    } else {
        input.style.borderColor = "red"
        input.setCustomValidity("Неверный Email");
        console.log("invalid email")
    }
}
let fM = localStorage.getItem("email")
if (fM != null) {
    input.value = fM
}
