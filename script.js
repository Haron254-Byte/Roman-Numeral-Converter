const input = document.getElementById('number');
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const inputField = document.querySelector(".inputs");

function toRoman(num) {
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let roman = "";
  for (const map of romanMap) {
    while (num >= map.value) {
      roman += map.numeral;
      num -= map.value;
    }
  }
  return roman;
}


  


btn.addEventListener("click",(event) => {
event.preventDefault();
const num = parseInt(input.value);

if (num > 3999){
output.textContent = `
Please enter a number less than or equal to 3999`
} else if (num <= 0){
  output.textContent = `
Please enter a number greater than or equal to 1`
} else if (input.value === '') {
        output.textContent = 'Please enter a valid number';
      } else {
  output.textContent = toRoman(num);
}
})
