/**
 * Serviço responsálvel por executar  as operações 
 * da calculadora
 * 
 * @author Edson Vieira Demetrio <edson@fidei.com.br>
 * @since 1.0.0
 * 
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /*Define as constantes utilizadas para identificar as operações de calculos.
    No angular se define uma constate através da palavra "readonly" = somente leitura
    ou seja, ela será usada, mas não podera ser alterada
    */
    static readonly SOMA: string = '+'; //Usando todo o nome em letramaiuscula, já é um indicativo visual que e uma CONSTANTE.
    static readonly SUBTRACAO: string = '-';
    static readonly DIVISAO: string = '/';
    static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Metodo que calcula uma operacao matematica dado 2 numeros.
   * Suporta operações de soma, subtração, divisão e multiplicação.
    * @param num1 = number
    * @param num2 = number
    * @param operacao = string da operação a ser executada
    * @return number = resultado da operação
   
    */
  calcular(num1:number, num2:number, operacao:string):number{
    let resultado: number; //armazena o resultado da operação

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
        case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado  =0;
    }
    return resultado;
  }
}
