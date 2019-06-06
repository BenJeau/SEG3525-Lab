$(document).ready(() => {
	updateTotal();
	updateContent();

	$('input[type=radio]').on('change', function() {
		updateContent();
	 });
	 $("form").submit(function(e){
		
		alert("Votre commande a été envoyé")
		return true;
	 });
});

const updateTotal = () => {
	$.getJSON(`../data/menu.json`, data =>{
		let menuItemIndex = JSON.parse(localStorage.getItem("menuItemIndex"));
		let restaurant = localStorage.getItem("restaurant");
		let total = 0;

		let relation = {};
		data[restaurant].forEach(i => relation[i.id] = i.price);

		menuItemIndex.forEach(i => {
			total += Number(relation[i.id]) * i.quantity;
		});

		total = parseFloat(total).toFixed(2);

		$("#main-description h2 b").html(`${total}$`)
	});
}

const updateContent = () => {
	let typePay = $("input[type='radio']:checked").val();
		
	switch(typePay) {
		case "credit":
			$("#paiement-fields").show();
			$("#cash-warning").hide();
			$("#cvv input").attr("required", true);
			$("#numeroCarte input").attr("required", true);
			$("#nomComplet input").attr("required", true);
			$("#cvv").show();
			break;
		case "debit":
			$("#paiement-fields").show();
			$("#cash-warning").hide();
			$("#cvv input").attr("required", false);
			$("#numeroCarte input").attr("required", true);
			$("#nomComplet input").attr("required", true);
			$("#cvv").hide();
			break;
		case "cash":
			$("#paiement-fields").hide();
			$("#cash-warning").show();
			$("#cvv input").attr("required", false);
			$("#numeroCarte input").attr("required", false);
			$("#nomComplet input").attr("required", false);
			break;
	}
}
