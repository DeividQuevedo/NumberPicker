

function generateNumber () {
    
    const Min = Math.ceil(document.querySelector('.inputMin').value)
    const Max = Math.floor(document.querySelector('.inputMax').value)
    

    if (Min>=0 && Min<Max) {
        const result = Math.floor(Math.random()*(Max-Min + 1)) + Min;
        alert(result)
    } else if (Min<0) {
        alert("Use apenas números positivos")
    } else {
        alert("O valor minimo deve ser maior que o valor máximo!!!")
    }
    
}

 