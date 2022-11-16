// call all the global ids

const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")


let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// this functions run over all ids
const calculateBill = () => {
  // bill
  const bill = Number(billInput.value)

  // tip should be divided by 100 to make it perchentage
  const tipPerchantage = Number(tipInput.value) / 100;

  const totalTip = bill * tipPerchantage;

  const totalBill = bill + totalTip;

  const perPersonTotal = totalBill / numberOfPeople;
  console.log(perPersonTotal)


}


const increasePeople = () => {


}


const decreasePeople = () => {



}