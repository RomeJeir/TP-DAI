const arr = [1, 2, 4, 12, 43, 55, 66, 0, -1];
var largest= 0;

const odds = arr.filter(number => {
  return number % 2 !== 0;
});

for (i=0; i<=largest;i++){
    if (odds[i]>largest) {
        var largest=odds[i];
    }
}


console.log("The odd numbers are: " + odds);

console.log("The highest odd number is: " + largest);
