import {
	SET_RESTAURANT,
	ADDITEM,
	REMOVEITEM,
	CLEAR_ITEMS
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
const clearItems = () => {
	return {
		type:CLEAR_ITEMS
	}
}


export {
	setRestaurant,
	addItem,
	removeItem,
	clearItems
}