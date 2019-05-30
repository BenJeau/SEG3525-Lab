


$(document).ready(() =>{
    var url = window.location.href;
    var param = url.split("#")[1];

    $.getJSON("../data/menu.json", (data) => {
		data.forEach((val, key) => {
			if(val.restaurant == param){
                
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

            }
		});
    });

    
    
   
   
});

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
                quantity : 0
            };
            menuItemIndex.push(item)
            localStorage.setItem("menuItemIndex", JSON.stringify(menuItemIndex));
        }
        
        
        
        
       
    }else{
        menuItemIndex = []
        var item = {
            id: o.name,
            quantity : 0
        };
        menuItemIndex.push(item)
        localStorage.setItem("menuItemIndex", JSON.stringify(menuItemIndex));
    }
    
   
  
}


