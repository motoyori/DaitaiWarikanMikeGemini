function calculate() {
	const price = parseFloat(document.getElementById('price').value);
	const num = parseInt(document.getElementById('num').value);
	const unit = parseInt(document.querySelector('input[name="unit"]:checked').value);
  
	if (isNaN(price) || isNaN(num) || price <= 0 || num <= 0) {
	  alert('入力値に誤りがあります。');
	  return;
	}
  
	// Calculate onePersonPrice without remainder
	let onePersonPrice = Math.floor(price / num / unit) * unit;
	const remainder = price % (num * unit);
  
	// Distribute remainder if any
	if (remainder > 0) {
	  onePersonPrice += remainder;
	}
  
	// Calculate total price
	const totalPrice = onePersonPrice * num;
  
	// Format and display results
	const result = [];
	result.push(`一人あたりだいたい ${onePersonPrice}円です。`);
	document.getElementById('verification').textContent = `合計で ${totalPrice}円になります。`;
  
	// Display individual amounts
	document.getElementById('result').innerHTML = result.join('<br>');
  }