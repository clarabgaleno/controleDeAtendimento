import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;  
  public inputNovaSenha: string = '';
  public ultimasSenhas: string [] = [];


  private senhasArray:Record<"SG"|"SP"|"SE", string[]> = {SG:[], SP:[], SE:[]} 

  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; } 
  

  constructor() { }

  novaSenha(tipoSenha: string = '') {
    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SG.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SP.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SE.push(this.inputNovaSenha);
    }
    console.log(this.senhasArray);
  
    this.ultimasSenhas.push(this.inputNovaSenha)
    this.ultimasSenhas = this.ultimasSenhas.slice (-5) 

  }
  
}

export class Tab1Page { 
  inputNovaSenha: string = '';

  constructor (public senhasService: SenhasService) {}
  
}

