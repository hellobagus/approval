import axios from 'axios';
import httpClient from './HttpClient';

class UserController {
  constructor() {
    this.basePath = '/c_auth';
  }

  login = async (email, password) => {
    try {
      const result = await httpClient.request({
        url: `${this.basePath}/Login`,
        method: "POST",
        data: {
          email,
          password,
          token : '',
          token_firebase : 'token test',
          device : 'ios',
          mac : 'mac test'
        }
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }

  }
  
  logout = () => null;
}

export default new UserController();
