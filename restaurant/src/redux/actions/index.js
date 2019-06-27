import {
	SET_RESTAURANT,
	ADDITEM,
	REMOVEITEM,
	
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
const removeItem = item => {
	return {
		type:REMOVEITEM,
		item
	}
}

export {
	setRestaurant,
	addItem,
	removeItem
	
}