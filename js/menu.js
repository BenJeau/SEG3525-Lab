$(document).ready(() =>{
	updateCartNum();
    var param = localStorage.getItem("restaurant");

    $.getJSON("../data/menu.json", (data) => {

		data[param].forEach((val, key) => {
			var temp = val.id;
			$("#plates-infos").append(
				`<div class="plate">
						<img  src="${val.img}" >
						<div class="plate-info">
							<div style="width:50%; padding-left:10px; text-align: left">
								<h4>${val.id}</h4>
								<h4>${val.price}$</h4>
							</div>
							<input  type="image" onClick="Add(this)" name="${val.id}" value="${val.price}" id="cartBtn" name="butoon"src="../img/icons/add-shopping-cart.svg" width="35" height="35" style="margin-left:35%; margin-top:7%" >
							
						</div>
				</div>`
			);

		});
	});

	window.addEventListener("storage", updateCartNum);
});

const updateCartNum = () => {
	let items = localStorage.getItem("menuItemIndex");
	let numItems = "";

	if (items) {
		numItems = JSON.parse(localStorage.getItem("menuItemIndex")).length;
	}

	if (numItems == 0) $("#number").css("opacity", 0);
	else if ($("#number").css("opacity") == 0) $("#number").css("opacity", 1);

	$("#number p").html(numItems);
}

function Add(o){

    var menuItemIndex = JSON.parse(localStorage.getItem("menuItemIndex"));
    if(menuItemIndex != null){
        var element = menuItemIndex.find((val) => val.id === o.name)
        if(element != null){
            var i =  menuItemIndex.indexOf(element);
            var menucopy = menuItemIndex.filter((val)=> val.id !== o.name)
            var item = {
                id:element.id,
                quantity :  element.quantity +1
            };
            menucopy.splice(i, 0, item)
            localStorage.setItem("menuItemIndex", JSON.stringify(menucopy));
        }else{
            var item = {
                id:o.name,
                quantity : 1
            };
            menuItemIndex.push(item)
            localStorage.setItem("menuItemIndex", JSON.stringify(menuItemIndex));
        }
        
        
        
        
       
    }else{
        menuItemIndex = []
        var item = {
            id: o.name,
            quantity : 1
        };
        menuItemIndex.push(item)
        localStorage.setItem("menuItemIndex", JSON.stringify(menuItemIndex));
    }
    
   

 
   updateCartNum();

}


