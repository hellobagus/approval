import axios from 'axios';
import httpClient from './HttpClient';

class MenuController {
  constructor() {
    this.basePath = '/c_auth';
  }

  getMenu = async (userId) => {
    try {
      const result = await httpClient.request({
        url: `/menu/${userId}`,
        method: "GET",
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getDetail = async (app_user) => {
    try {
      const result = await httpClient.request({
        url: `/detail/${app_user}`,
        method: "GET",
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

}

export default new MenuController();
