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

  // persons to split
  const perPersonTotal = totalBill / numberOfPeople;

  // per person total
  perPersonTotalDiv.innerText = perPersonTotal;

}


const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill()
}


const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill()


}