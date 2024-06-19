function calculate() {
	const price = parseFloat(document.getElementById('price').value);
	const num = parseInt(document.getElementById('num').value);
  
	if (isNaN(price) || isNaN(num) || price <= 0 || num <= 0) {
	  alert('入力値に誤りがあります。');
	  return;
	}
  
	const onePersonPrice = Math.round(price / num);
	const result = `一人あたりだいたい${onePersonPrice}円です。`;
  
	document.getElementById('result').textContent = result;
  }