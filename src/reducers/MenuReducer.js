import { actionTypes } from 'actions/MenuActions';

const menuState = {
  menu: [],
};

const detailState = {
  detail: [],
};

const menuReducer = (state = menuState, action) => {
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

const detailReducer = (state = detailState, action) => {
  switch (action.type) {
    case actionTypes.DETAIL_REQUEST:
      return {
        ...state,
      };
    case actionTypes.DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.detail,
      };
    default:
      return state;
  }
};

export {
  menuReducer,
  detailReducer
};
