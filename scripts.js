const button = document.querySelector('button')
const paragraph = document.querySelector('.paragraph-result')


function cliquei() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    paragraph.innerHTML = `O resultado entre ${min} e ${max} é ${result}!`
    
}

function alerta(){
    if(document.querySelector('.input-min').value >= document.querySelector('.input-max').value){

        alert(`O valor do primeiro campo tem que ser menor que o valor do segundo campo!`)

        paragraph.innerHTML = ``
    }
}

button.addEventListener('click', alerta)