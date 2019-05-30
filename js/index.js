$(document).ready(function () {
	$( '#index-form' ).submit(function(e) {
		if($( 'input[class^="type-repas"]:checked' ).length === 0) {
		   alert( 'Sélectionnez au moins un type de repas' );
		   e.preventDefault();
		}
	 });
});