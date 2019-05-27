$(document).ready(() => {
	var restaurant = localStorage.getItem("restaurant");
	var menuItemIndex = localStorage.getItem("menuItemIndex");

	if (restaurant && menuItemIndex) {
		$.getJSON(`../data/${restaurant}.json`, data => {
			let name = "";
			let amount = 0;
			let price = "";

			if (amount > 1) name += ` (${amount})`;

			$("address-fields table").append(
				`<tr>
					<td>${name}</td>
					<td>${price}</td>
				</tr>`
			)
		});
	}
});