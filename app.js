const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector("#errorMessage")
const numberOfNotes = document.querySelectorAll(".number-of-notes")

const notes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", () => {
    let bill = Number(billAmount.value)
    let cash = Number(cashGiven.value)
    errorMessage.style.display = "none"
    if (bill > 0) {

        if (cash > bill) {
            let returnAmount = cash - bill
            countOfNote(returnAmount)
        } else {
            errorMsg("You need to give more cash. 💵")
        }

        if (bill === cash) {
            errorMsg("Nothing to return!")
        }

    } else {
        errorMsg("Enter valid Amount. 🤔")
    }

})


function countOfNote(returnAmount) {

    for (i = 0; i < notes.length; i++) {

        const numOfNotes = Math.trunc(returnAmount / notes[i])

        returnAmount = returnAmount % notes[i]

        numberOfNotes[i].innerText = numOfNotes
    }
}
const errorMsg = message => {
    errorMessage.style.display = "block"
    errorMessage.innerText = message
}