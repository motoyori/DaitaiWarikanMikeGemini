function calculate() {
	const price = parseFloat(document.getElementById('price').value);
	const num = parseInt(document.getElementById('num').value);
  
	if (isNaN(price) || isNaN(num) || price <= 0 || num <= 0) {
	  alert('入力値に誤りがあります。');
	  return;
	}
  
	const onePersonPrice = Math.floor(price / num); // Use floor to get the lower integer
	const remainder = price % num; // Calculate the remainder
  
	const result = []; // Initialize an array for results
  
	// Distribute the remainder among one person
	if (remainder > 0) {
	  result.push(`[端数含む] 一人あたり ${onePersonPrice + remainder}円です。`);
	  result.push(`[端数なし] 一人あたり ${onePersonPrice}円です。（${num - 1}人）`);
	} else {
	  // No remainder, equal amount for all
	  result.push(`一人あたり ${onePersonPrice}円です。`);
	}
  
	// Calculate and display total amount
	const totalPrice = onePersonPrice * num + remainder;
	document.getElementById('verification').textContent = `合計で ${totalPrice}円になります。`;
  
	// Display individual amounts
	document.getElementById('result').innerHTML = result.join('<br>');
  }