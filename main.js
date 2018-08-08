    var result =
        `
/*大家好    
*/
* {
    transition: all 2s;
}

html {
    background-color: rgb(222,222,222);
    font-size: 16px;
}

#code {
    padding: 16px;
}

`
    var n = 0
    var id = setInterval(() => {
        if (n > result.length) {
            clearInterval(window.id)
        }
        n++
        code.innerHTML = result.substring(0, n)
        style.innerHTML = result.substring(0, n)
    }, 50)