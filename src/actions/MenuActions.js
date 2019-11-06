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

  OTORISASI: 'OTORISASI',
  OTORISASI_REQUEST: 'OTORISASI_REQUEST',
  OTORISASI_ERROR: 'OTORISASI_ERROR',
  OTORISASI_SUCCESS: 'OTORISASI_SUCCESS',
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
  type: actionTypes.DETAIL_ERROR,
  error,
});


const otorisasiRequest = () => ({
  type: actionTypes.OTORISASI,
});

const otorisasiSuccess = otorisasi => ({
  type: actionTypes.OTORISASI_SUCCESS,
  otorisasi,
});

const otorisasiError = error => ({
  type: actionTypes.OTORISASI_ERROR,
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

export const getDetail = (userId,modules) => async (dispatch) => {
  dispatch(detailRequest());

  try {
    const detail = await MenuController.getDetail(userId,modules);

    dispatch(detailSuccess(detail));
  } catch (error) {
    dispatch(detailError(error));
  }
};

export const getOtorisasi = (entity,docNo,modules) => async (dispatch) => {
  dispatch(otorisasiRequest());

  try {
    const otorisasi = await MenuController.getOtorisasi(entity,docNo,modules);

    dispatch(otorisasiSuccess(otorisasi));
  } catch (error) {
    dispatch(otorisasiError(error));
  }
};
