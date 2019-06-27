import {
	SET_RESTAURANT,
	ADDITEM,
	
} from "../reducers/constants";

const setRestaurant = restaurant => {
	return {
		type: SET_RESTAURANT,
		restaurant,
	};
};

const addItem = newItem => {
	return {
		type : ADDITEM,
		newItem,
	}
}


export {
	setRestaurant,
	addItem,
	
}