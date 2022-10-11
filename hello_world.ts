// tipagem no Typescript

// tipagem implícita
let username = 'shaolin_matador_de_porco'
username = 'flavioDoPneu'

// tipagem explícita
let pi: number = 3.1415
let logado: boolean = true

// union types
let rg: number | string = 349995087
rg = 65454141

let generico: any = []
generico = {
a: '',
b: 8,
c: true
}
generico = 'Eu sou genérico'
generico = 6.89

const listaDeNomes: string[] = ['João Pedro', 'César', 'Vitor', 'Cláudia', 'Vitória', 'Larissa']
listaDeNomes.push('Roberta')

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
notas.push(11)

const valores: Array<string | number> = [ 'rsdsg', 559, 'dsgtb', 5546]
const array: Array<boolean> = [true, false, true, false]
const lista: Array<any> = [ 1, true, 'fihfa', [], {} ]
const lista2: any[] = [ 1, true, 'fihfa', [], {} ]
