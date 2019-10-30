import MenuController from '../controllers/MenuController';

export const actionTypes = {
  MENU: 'MENU',
  MENU_REQUEST: 'MENU_REQUEST',
  MENU_ERROR: 'MENU_ERROR',
  MENU_SUCCESS: 'MENU_SUCCESS',

  DETAIL: 'DETAIL',
  DETAIL_REQUEST: 'DETAIL_REQUEST',
  DETAIL_ERROR: 'DETAIL_ERROR',
  DETAIL_SUCCESS: 'DETAIL_SUCCESS',
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

const detailRequest = () => ({
  type: actionTypes.DETAIL,
});

const detailSuccess = detail => ({
  type: actionTypes.DETAIL_SUCCESS,
  detail,
});

const detailError = error => ({
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

export const getDetail = (userId) => async (dispatch) => {
  dispatch(detailRequest());

  try {
    const detail = await MenuController.getDetail(userId);

    dispatch(detailSuccess(detail));
  } catch (error) {
    dispatch(detailError(error));
  }
};
