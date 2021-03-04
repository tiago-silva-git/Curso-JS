var agora = new Date() 
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora > 4 && hora < 12) {
    console.log(`Bom dia!`)
} else if (hora >= 12 && hora < 20 ) {
    console.log(`Boa tarde!`)
} else {
    console.log('Boa noite!')
}