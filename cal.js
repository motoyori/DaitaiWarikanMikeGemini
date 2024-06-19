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
  
	// Prepare results arrays
	const remainderResult = [];
	const noRemainderResult = [];
  
	// Distribute remainder if any
	if (remainder > 0) {
	  onePersonPrice += remainder;
	  remainderResult.push(`[端数含む] 一人あたり ${onePersonPrice}円です。`);
	}
  
	// Calculate noRemainderPrice (corrected)
	const noRemainderPrice = Math.floor(price / num / unit) * unit;
  
	// Calculate and display results for no remainder group
	if (num > 1) {
	  noRemainderResult.push(`[端数なし] 一人あたり ${noRemainderPrice}円です。（${num - 1}人）`);
	  const noRemainderTotalPrice = noRemainderPrice * (num - 1); // Corrected calculation
	  document.getElementById('verification').textContent = `合計で ${noRemainderTotalPrice + remainder}円になります。`; // Add remainder
	} else {
	  // If only one person, no need to separate
	  noRemainderResult.push(`一人あたり ${noRemainderPrice}円です。`);
	  document.getElementById('verification').textContent = `合計で ${noRemainderPrice}円になります。`;
	}
  
	// Display individual results
	const result = remainderResult.concat(noRemainderResult);
	document.getElementById('result').innerHTML = result.join('<br>');
  }