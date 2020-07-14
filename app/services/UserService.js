const baseService = require('./BaseService');


export default class UserService {

    updateUserScore(callback, userId, puntaje) {
        baseService.put(callback, "usuarios/updateScore/", ":" + userId, {score: puntaje});
    };
}