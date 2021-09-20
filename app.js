const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector("#errorMessage")
const numberOfNotes = document.querySelectorAll(".number-of-notes")

const notes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", () => {
    errorMessage.style.display = "none"
    if (billAmount.value > 0) {
        let returnAmount = cashGiven.value - billAmount.value
        countOfNote(returnAmount)

    } else {
        error("Enter valid number")
    }

})


function countOfNote(returnAmount) {

    for (i = 0; i < notes.length; i++) {

        const numOfNotes = Math.trunc(returnAmount / notes[i])

        returnAmount = returnAmount % notes[i]

        numberOfNotes[i].innerText = numOfNotes
    }
}
const error = message => {
    errorMessage.style.display = "block"
    errorMessage.innerText = message
}