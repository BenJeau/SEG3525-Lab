$(document).ready(() => {
	var restaurant = localStorage.getItem("restaurant");
	var menuItemIndex = JSON.parse(localStorage.getItem("menuItemIndex"));
	var menu = [];
	if(menuItemIndex != null && restaurant != null ){
		$.getJSON(`../data/menu.json`, data =>{
			data[restaurant].forEach((val, key) => {
				
				var item={
					id:val.id,
					price: val.price
				}
				menu.push(item);
			});
			var total = 0;
			menuItemIndex.forEach((val, key) => {
				var el = menu.find(element => element.id ===  val.id);
				
				var plat = val.id;
				var prix = el.price * val.quantity;
				total = total+ prix;
				$("#address-fields table").append(
					`<tr>
						<td>${plat}(${val.quantity})</td>
						<td>${prix}</td>
						<td><button style="font-size:24px;color:white;background: transparent; border: none;"> <i class="fa fa-minus"></i></button></td>
					</tr>`
				)
				
			});
			$("#address-fields table").append(
				`<tr class="total-row ">
					<td >Total : </td>
					<td>${total}$</td>
				</tr>`
			)
			
		});
		
		
		
		
	
		
	}
	
});