// toFixed= define o numero de casas decimais de um valor
let num = 123.456
console.log(num.toFixed(2))
// alert padrao= faz um alerta
//alert('hello world')

// alert de confirmaçao
let msg=confirm('Vc é em aluno?')

// alet passsando valores em campos
//let msg1=prompt('Digite seu nome')
//document.write('Meu nome é: ',msg1,'!')

//IF, ELSE!!!!
/*let idade=prompt('digite sua idade')
if(idade <= 12){
    document.write('é uma criança')
}else if(idade <=17){
    document.write('é um adolescente')
}else if(idade <= 19){
    document.write('é um jovem')
}else{
    document.write('é um adulto' )
}*/
let valor=prompt('digite um valor')
if(valor == 10){
    document.write('o valor é dez')
}else if(valor<10){
    document.write('é menor que dez')
}else{
    document.write('é maior que dez')
}

