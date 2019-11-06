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

  getDetail = async (app_user,modules) => {
    try {
      const result = await httpClient.request({
        url: `/menu/${app_user}/${modules}`,
        method: "GET",
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getOtorisasi = async (entity,docNo,modules) => {
    try {
      const result = await httpClient.request({
        url: `/menu/${modules}/${entity.trim()}/${docNo}`,
        method: "GET",
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

}

export default new MenuController();
