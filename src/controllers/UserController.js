import axios from 'axios';
import httpClient from './HttpClient';

class UserController {
  constructor() {
    this.basePath = '/c_auth';
  }

  login = async (email, password) => {
    try {
      const result = await httpClient.request({
        url: `/login`,
        method: "POST",
        data: {
          username : email,
          password,
          token : '',
          token_firebase : 'token test',
          device : 'ios',
          mac : 'mac test'
        }
      });
      console.log('user',result);
      return result.user;
    } catch (error) {
      return Promise.reject(error);
    }

  }
  
  logout = () => null;
}

export default new UserController();
