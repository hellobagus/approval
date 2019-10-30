import { actionTypes } from 'actions/MenuActions';

const initialState = {
  menu: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_REQUEST:
      return {
        ...state,
      };
    case actionTypes.MENU_SUCCESS:
      return {
        ...state,
        menu: action.menu,
      };
    default:
      return state;
  }
};

export default menuReducer;
