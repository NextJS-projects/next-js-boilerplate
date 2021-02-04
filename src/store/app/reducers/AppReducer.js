//constants
import { updateObject } from '../../../constants/Helpers';
//action
import { SET_TEST_ACTION } from '../AppActionTypes';

const initialState = {
	testString: 'Initial test',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TEST_ACTION:
			return updateObject(state, { testString: 'Final test' });
		default:
			return state;
	}
};

export default reducer;
