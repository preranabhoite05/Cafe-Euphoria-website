const checkboxItems = document.querySelectorAll('.item-checkbox');
const billTableBody = document.querySelector('#bill tbody');
const totalElement = document.querySelector('#total');

let bill = [];

checkboxItems.forEach((item) => {
	item.addEventListener('change',(event) => {
		if (event.target.checked) {
			const itemData = {
				name: event.target.dataset.name,
				price: parseFloat(event.target.value),
				quantity: 1
			};

			bill.push(itemData);
			updateBill();
		} else {
			const itemName = event.target.dataset.name;
			bill = bill.filter((item) => item.name !== itemName);
			updateBill();
		}
	});
});

billTableBody.addEventListener('input', (event) => {
	if (event.target.tagName.toLowerCase() === 'input') {
		const itemName = event.target.dataset.name;
		const itemIndex = bill.findIndex((item) => item.name === itemName);
		bill[itemIndex].quantity = parseFloat(event.target.value);
		updateBill();
	}
});

function updateBill() {
	billTableBody.innerHTML ='';
	let total = 0;

	bill.forEach((item) => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${item.name}</td>
			<td><input type="number" data-name="${item.name}" value="${item.quantity}"></td>
			<td>${item.price * item.quantity}</td>
		`;

		billTableBody.appendChild(row);
		total += item.price * item.quantity;
	});

	totalElement.textContent = total.toFixed(2);
}

