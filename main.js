// The code snippet you want to highlight, as a string
var text = "html {color: red;}";

// Returns a highlighted HTML string
var html = Prism.highlight(text, Prism.languages.css, 'css');
console.log(html);



var result =
    `
/*大家好    
*/
* {
    transition: all 2s;
}

body {
    padding: 0;
    margin: 0;
}

html {
    background-color: rgb(222,222,222);
    font-size: 16px;
}

#code {
    padding: 16px;
}

/*我需要一些代码高亮*/
.token.selector {
    color: #690;
}

.token.property {
    color: #905;
}

.token.function {
    color: #DD4A68;
}
/*3D效果来一波～*/
#code {
    transform: rotate(360deg)
}
/*下面我来介绍我自己～*/
/*我需要一张白纸*/

`
var n = 0
var id = setInterval(() => {
    n++
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
    style.innerHTML = result.substring(0, n)
    if (n > result.length) {
        clearInterval(window.id)
        f2()
        f3(result)
    }
}, 20)

function f2() {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function f3(preResult) {
    var result = `
#paper {
    width: 400px;height:400px;background-color:red;
}
`
var n = 0
var id = setInterval(() => {
    n++
    code.innerHTML = preResult + result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
    style.innerHTML = style.innerHTML + result.substring(n-1, n)

    if (n > result.length) {
        clearInterval(id)
    }
}, 20)

}