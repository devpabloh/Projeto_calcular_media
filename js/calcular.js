let trHeader = document.querySelector('thead tr')
let thsHeader = document.querySelector("th")
let thAlunosNotas = document.querySelector("[aluno-nota]") 
const indices_notas = {}

Array.from(thAlunosNotas).forEach(function(th){
    let prop = th.getAttibute("aluno-nota")
    indices_notas[prop] = pegarIndice(prop)
})

function pegarIndice(indice){
    const th = trHeader.querySelector(`[aluno-nota="${indice}"]
    `)

    const i = Array.prototype.indexOf.call(thsHeader, th)
    return i
}

const trs = document.querySelectorAll("tbody tr")

let x = 0
let media = 0

