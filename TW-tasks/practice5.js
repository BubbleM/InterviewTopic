function getCubeAdd (num) {
  let total = 0;
  let string = num.toString();
  for (let i = 0; i < string.length; i++) {
    total += Math.pow(string.charAt(i) - 0, 3);
  }
	
  return total;
}

function printNarcissus () {
  for (let i = 100; i < 1000; i++) {
    if (getCubeAdd(i) === i) {
      console.log(i);
    }
  }
}

printNarcissus();
