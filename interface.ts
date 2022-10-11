/*let pessoa = {
    nome: 'Pietro',
    idade: 22,
    altura: 1.8,
    cpf: '123.456.789-63',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'Typescript', 'Javascript', 'Node.js', 'Spring Boot']
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep:'12356-789'
    }
}
    let pessoa2 = {
        nome: 'Pietro',
        idade: 22,
        altura: 1.8,
        cpf: '123.456.789-63',
        solteiro: false,
        habilidades: ['Java', 'Angular', 'Typescript', 'Javascript', 'Node.js', 'Spring Boot']
        endereco: {
            rua: 'Rua Feliz',
            numero: 567,
            estado: 'CE',
            complemento: 'Sem complemento',
            cep:'12356-789'
        },
        rg: '34.668.202-8'
}
*/

interface Endereco {
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string

}

interface Pessoa {
    nome: string
    idade: number
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: string[]
    endereco: Endereco
    rg: string
    cumprimentar(): void
}

const p: Pessoa = {
    altura: 1.9, 
    nome: 'Raul',
    idade: 12,
    cpf: '358.582.654-12',
    solteiro: true,
    habilidades: ['JAVA'],
    endereco:{
        rua: 'Rua Bacana',
        cep: '12589-789',
        complemento: 'Apartamento',
        estado: 'PE',
        numero: 789,
       
    },
    rg: '36.951.825-8',
    cumprimentar() {
        console.log('Muito prazer, me chamo ' + this.nome)
    } 
}

const p2: Pessoa = {
    altura: 1.6, 
    nome: 'Paula',
    idade: 18,
    cpf: '858.582.654-12',
    solteiro: false,
    habilidades: ['JS'],
    endereco:{
        rua: 'Rua Ostra',
        cep: '15895-789',
        complemento: 'Apartamento',
        estado: 'SP',
        numero: 700,   
},
    rg: '34-998-752-8',
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome)

    }
}