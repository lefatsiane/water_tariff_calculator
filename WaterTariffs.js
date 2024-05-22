let litres = Number(prompt("how many litres of water did you use this month?")); // will prompt user to enter the ammount of litres used in the month
console.log(`You have used ${litres}l of water`); //this console will display "lt" message

numOne = Number(94380);
numTwo = Number(100710);
numThree = Number(778365);

if (litres <= 6000) {
  // if the liters of water are equal to or under 6000l this formula will be used
  let BalanceOne = Number((litres * 15.73) / 1000); //the formula used to calculate the amount
  console.log(`the amount captured is R${BalanceOne}`); // will display the balance of the account if the liters used are under 6000l
} else if (litres > 6000 && litres <= 10500) {
  // if the litres of water are more than 6000 but equal to and under 10500 this formula will be used
  let BalanceTwo = Number((numOne + 22.38 * (litres - 6000)) / 1000); //is the formula that will be used if the litres of water are more than 6000l and equal to and under 10500l
  console.log(`the amount captured is R${BalanceTwo}`); //will display the balance of the account if the liters used are over 6000l and under 10500l
} else if (litres > 10500 && litres <= 35000) {
  // if the litres of water are more than 10500 but equal to and under 35000 this formula will be used
  let BalanceThree = Number(
    (numOne + numTwo + 31.77 * (litres - 10500)) / 1000
  ); //is the formula that will be used if the litres of water are more than 10500l and equal to and under 35000l
  console.log(`the amount captured is R${BalanceThree}`); //will display the balance of the account if the liters used are over 10500l and under 35000l
} else if (litres > 35000) {
  // if the litres of water are more 35000 this formula will be used
  let BalanceFour = Number(
    (numOne + numTwo + numThree + 69.76 * (litres - 35000)) / 1000
  ); //is the formula that will be used if the litres of water are more 35000l
  console.log(`the amount captured is R${BalanceFour}`); //will display the balance of the account if the liters used are over 35000l
}
