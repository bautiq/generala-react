const baseService = require('./BaseService');

export default class UserService {

    login(callback, body) {
        baseService.post(callback, "login/", undefined, body);
    };

    register(callback, body) {
        baseService.post(callback, "register/", undefined, body)
    }
}