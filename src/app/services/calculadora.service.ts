/**
 * Serviço que será responsável por executar as operações ariméticas de somar, subtrair, dividir e Multiplicar
 *
 * @author Bruno Pessoa <brunopessoa.melo@gmail.com>
 *
 * @since 1.0.0
 * 
 **/


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /**
   * Define as COnstantes utilizadas para identificar as operacções de cálculo 
   * **/

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = 'x';


  constructor() { }


/**
* Método que calcula uma operação matématica dados dois números.
*Suporta as operações arimtméticas.
*
 * @param num1 number
 * @param num2 number
 * @param operação string Operacao a ser executada
 * @return number Resultado da operação.
* 
**/

  calcular(num1: number, num2: number, operacao: string):number {
    let resultado: number; 
  
  switch(operacao) {
    case CalculadoraService.SOMA:
      resultado = num1 + num2;
    break;

    case CalculadoraService.SUBTRACAO:
    resultado = num1 - num2;
    break;

    case CalculadoraService.MULTIPLICACAO:
    resultado = num1 * num2;
    break;

     case CalculadoraService.DIVISAO:
    resultado = num1 / num2;
      break;
      default:
      resultado = 0;
    }
     return resultado;
  }

}
