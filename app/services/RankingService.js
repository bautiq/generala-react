const baseService = require('./BaseService');


/*
Example use in view:
import RankingService from './app/services/RankingService';

new RankingService().getRanking( function (response){ 
    console.log(response);
  });
*/
export default class RankingService {

    getRanking(callback) {
        baseService.get(callback, "ranking/");
    };
}


