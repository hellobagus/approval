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

}

export default new MenuController();
