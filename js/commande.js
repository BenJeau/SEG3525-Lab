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
					`<tr >
						<td>${plat} (${val.quantity})</td>
						<td>${prix}</td>
						<td><button onClick="Remove(this)" id="${plat}" value="${prix}" style="font-size:24px;color:white;background: transparent; border: none;"> <i class="fa fa-minus"></i></button></td>
					</tr>`
				)
				
			});
			$("#address-fields table").append(
				`<tr class="total-row ">
					<td >Total : </td>
					<td id="total">${total}$</td>
				</tr>`
			)
			
		});
		
	
	}
	
});

function Remove(o){
	var menuItemIndex = JSON.parse(localStorage.getItem("menuItemIndex"));
	var restaurant = localStorage.getItem("restaurant");
	var menu = [];
	$.getJSON(`../data/menu.json`, data =>{
		data[restaurant].forEach((val, key) => {
			
			var item={
				id:val.id,
				price: val.price
			}
			menu.push(item);
		});
		var el = menuItemIndex.find(element => element.id ===  o.id);
		var m = menu.find(element => element.id ===  o.id);
		var i =  menuItemIndex.indexOf(el);
		var menucopy = menuItemIndex.filter((val)=> val.id !== o.id);
		if(el.quantity-1 != 0){
			var newEl={
				id: el.id,
				quantity: el.quantity-1
			}
			var prix = newEl.quantity* m.price;
			var plat = newEl.id;
			menucopy.splice(i, 0, newEl);
			localStorage.setItem("menuItemIndex", JSON.stringify(menucopy));
			var newtd = `
			<td>${plat} (${newEl.quantity})</td>
			<td>${prix}</td>
			<td><button onClick="Remove(this)" id="${plat}" value="${prix}" style="font-size:24px;color:white;background: transparent; border: none;"> <i class="fa fa-minus"></i></button></td>
		`
			o.closest('tr').remove();
			$("#address-fields table").append(
				`<tr >
					<td>${plat} (${newEl.quantity})</td>
					<td>${prix}</td>
					<td><button onClick="Remove(this)" id="${plat}" value="${prix}" style="font-size:24px;color:white;background: transparent; border: none;"> <i class="fa fa-minus"></i></button></td>
				</tr>`
			)
			var p = $("#total").html();
			var total = parseInt(p,10);
			var newTotal = total - m.price;
			$("#total").closest('tr').remove();
			$("#address-fields table").append(
				`<tr class="total-row ">
					<td >Total : </td>
					<td id="total">${newTotal}$</td>
				</tr>`
			)
			
			
			
		
		}else{
			localStorage.setItem("menuItemIndex", JSON.stringify(menucopy));
			o.closest('tr').remove();
			var p = $("#total").html();
			var total = parseInt(p,10);
			var newTotal = total - parseInt(o.value, 10);
			$("#total").html(newTotal+'$');

		}
	});
	

	;
	

}