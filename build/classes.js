"use strict";
class Cachorro {
    /**
     * as variáveis dentro da classe se chama atributos ou propriedades
     */
    // nome: string
    // raca: string
    // cor: string
    // idade: number
    // peso: number
    // altura: number
    // morde: boolean
    // vacinado: boolean
    // pedigree: boolean
    /**
     * Método contrutor
     *
     * serve para criar um novo objeto da classe, possamos receber valores para a que a classe
     * utilize - os
     *
     * se o programador não criar o método contrutor, a propria linguagem irá gerar um método
     * construtor padrão, que é vazio.
     *
     * this faz refeência a propria classe dentro dela mesma
     */
    constructor(nome, raca, cor, idade, peso, altura, morde, vacinado, pedigree) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.morde = morde;
        this.vacinado = vacinado;
        this.pedigree = pedigree;
        // this.nome = nome,
        // this.raca = raca,
        // this.cor = cor
        // this.idade = idade
        // this.peso = peso
        // this.altura = altura
        // this.morde = morde
        // this.vacinado = vacinado
        // this.pedigree = pedigree
    }
    somar(a, b) {
        return a + b;
    }
}
/**
 * Objeto é uma instância da classe
 */
let c = new Cachorro('Mike', 'Pitbull', 'Preto', 3, 50, 0.87, true, false, true);
let c2 = new Cachorro('Luna', 'Labrador', 'Amarelo', 5, 23, 0.65, true, true, false);
console.log(c.nome); // Luki
console.log(c2); // Jamal
