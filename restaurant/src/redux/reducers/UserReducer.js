import {
	SET_RESTAURANT,
} from './constants';

let defaultState = {
	restaurant: "",
};

export default function UserReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_RESTAURANT:
			return {
				...state,
				restaurant: action.restaurant,
			};

		default:
			return state;
	}
}
