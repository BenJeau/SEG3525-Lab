import {
	SET_RESTAURANT,
	ADDITEM
	
} from './constants';



let defaultState = {
	restaurant: "",
	items:[]
};


export default function UserReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_RESTAURANT:
			return {
				...state,
				restaurant: action.restaurant,
			};

		case ADDITEM:
			if (!state.items){
				state.items = [];

			}				
			var el = state.items.find((val) => val.id === action.newItem.id);
			if(el != null){
				var i =  state.items.indexOf(el);
				var itemsCopy = state.items.filter((val) => val.id !== action.newItem.id)
				
				var item = {
					id:el.id,
					quantity :  el.quantity +1
				};
				itemsCopy.splice(i, 0, item);
				state.items = itemsCopy;
			}else{
				state.items.push(action.newItem);
			}
			console.log(state.items);
			return{
				...state
			}
		
		
		default:
			return state;
	}
}
