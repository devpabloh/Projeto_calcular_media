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

while(trs[x]){
    const tds = trs[x].querySelectorAll('td')

    media = avarege(
        parseFloat(tds(indices_notas.n1).textContent),
        parseFloat(tds(indices_notas.n2).textContent),
        parseFloat(tds(indices_notas.n3).textContent),
        parseFloat(tds(indices_notas.n4).textContent)
    )
    x++

    tds[indices_notas.media].textContent = media
}
