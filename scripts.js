function cliquei() {
    const button = document.querySelector('button')
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const paragraph = document.querySelector('.paragraph-result')

    paragraph.innerHTML = `O resultado entre ${min} e ${max} é ${result}!`
    
}