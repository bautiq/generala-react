const baseService = require('./BaseService');


/*
Example use in view:
import RankingService from './app/services/RankingService';

new RankingService().getRanking( function (response){ 
    console.log(response);
  });
*/
export default class DificultadService {

    postDificultad(callback, dificultad){
        baseService.post(callback, "nuevaPartida/" + dificultad);
    }
    
}

