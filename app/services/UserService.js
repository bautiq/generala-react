const baseService = require('./BaseService');

export default class UserService {

    login(callback, body) {
        baseService.get(callback, "login/", undefined, body);
    };

    register(callback, body) {
        baseService.get(callback, "register/", undefined, body)
    }
}