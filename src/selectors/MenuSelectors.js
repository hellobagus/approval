const selectMenu = state => state.menuReducer.menu;
const selectDetail = state => state.detailReducer.detail;

export {
    selectMenu,
    selectDetail
};
