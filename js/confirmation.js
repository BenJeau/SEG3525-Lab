$(document).ready(() => {
	updateContent();

	$('input[type=radio]').on('change', function() {
		updateContent();
	 });
});

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
