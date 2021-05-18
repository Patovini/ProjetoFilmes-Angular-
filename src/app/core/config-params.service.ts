import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigParams } from '../shared/models/config-params';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configurarParametros(config: ConfigParams): HttpParams {
    let httpParms = new HttpParams();
    if(config.pagina){
      httpParms = httpParms.set('_page', config.pagina.toString());
    }
    if(config.limite){
      httpParms = httpParms.set('_limit', config.limite.toString());
    }
    
    if(config.pesquisa){
      httpParms = httpParms.set('q', config.pesquisa);
    }
    if(config.campo) {
      httpParms = httpParms.set(config.campo.tipo, config.campo.valor.toString());
    }

    return httpParms
    
  }
}
