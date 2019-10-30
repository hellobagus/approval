import MenuController from '../controllers/MenuController';

export const actionTypes = {
  MENU: 'MENU',
  MENU_REQUEST: 'MENU_REQUEST',
  MENU_ERROR: 'MENU_ERROR',
  MENU_SUCCESS: 'MENU_SUCCESS',
};

const menuRequest = () => ({
  type: actionTypes.MENU,
});

const menuSuccess = menu => ({
  type: actionTypes.MENU_SUCCESS,
  menu,
});

const menuError = error => ({
  type: actionTypes.MENU_ERROR,
  error,
});

export const getMenu = (userId) => async (dispatch) => {
  dispatch(menuRequest());
  try {
    const menu = await MenuController.getMenu(userId);
    dispatch(menuSuccess(menu));
  } catch (error) {
    dispatch(menuError(error));
  }
};
