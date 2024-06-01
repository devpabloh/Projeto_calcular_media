let name = document.getElementById("name")

function calcularMedia(nota1,nota2, nota3, nota4){
    // verificando se os inputs são númericos
    if(isNaN(nota1) || sNaN(nota2) || sNaN(nota3)|| sNaN(nota4)){
        return "Por favor, inserir valores válidos"
    }
     var media = nota1 + nota2 + nota3 + nota4;
    
    return media;

}


function calcular(){
    // Aqui recebemos os valores do input
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)

    var media = calcularMedia(nota1, nota2, nota3, nota4)

    //exibir o resultado
    document.getElementById("media").innerText = `${media}`
}