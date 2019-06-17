import {
	SET_RESTAURANT
} from "../reducers/constants";

const setRestaurant = restaurant => {
	return {
		type: SET_RESTAURANT,
		restaurant,
	};
};

export {
	setRestaurant
}