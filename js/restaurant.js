$(document).ready(() => {
	$.getJSON("../data/restaurants.json", (data) => {
		data.forEach((val, key) => {
			let types = "";
			let weekdays = "";
			let hours = "";

			Object.keys(val.hours).forEach(val => weekdays += `<p>${val}</p>`)
			Object.values(val.hours).forEach(val => hours += `<p>${val}</p>`)
			val.types.forEach(val => types += `<div class="type-cuisine">${val}</div>`)

			let rating = 0;
			let stars = "";
			val.ratings.forEach(val => rating += val)

			rating /= val.ratings.length;
			let fullStars = Math.floor(rating);
			let halfStars = Math.floor((rating - Math.floor(rating)) * 2);

			for (let i = 0; i < 5; i++) {
				var prefix = "empty";
				if (fullStars != 0) {
					prefix = "full";
					fullStars--;
				} else if (halfStars != 0) {
					prefix = "half";
					halfStars--;
				}
				
				stars += `<img src="../img/stars/${prefix}-star.svg">`
			}

			$("#restaurant-cards").append(
				`<a class="restaurant-card" href="/layout/menu.html#${val.id}">
					<div class="restaurant-image" id="image${key+1}">
						<div class="restaurant-image-info">
							<p class="address">${val.address}</p>
							<p class="price">${val.price_range}</p>
						</div>
					</div>
					<div class="restaurant-info">
						<div class="restaurant-ratings">
							${stars}
							<p class="num-ratings">${val.ratings.length}</p>
						</div>
						<div class="restaurant-hours">
							<div class="weekdays">
								${weekdays}
							</div>
							<div class="hours">
								${hours}
							</div>
						</div>
						<div class="restaurant-type">
							${types}
						</div>
					</div>
				</a>`
			 )
		});
	});
});