function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css')
        style.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n > code.length) {
            window.clearInterval(id)
            if (fn) {
                fn.call()
            }
        }
    }, 20)
}

function writeMd(md, fn) {
    let domPaper = document.querySelector('#paper > #content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = md.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n > md.length) {
            window.clearInterval(id)
            if (fn) {
                fn.call()
            }
        }
    }, 70)
}

function mdToHtml(md) {
    var converter = new showdown.Converter()
    var mdhtml = converter.makeHtml(md)
    let domPaper = document.querySelector('#paper > #content')
    domPaper.innerHTML = mdhtml
}

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.id = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    if (fn) {
        fn.call()
    }
}


var md =
    `
# 我的简历
## 自我介绍
我叫 XXX
1993 年 8 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
## 技能介绍
熟悉 JavaScript CSS
## 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
## 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- blog
## 学习经历

## 工作经历
`

var result =
    `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
* {
    transition: all 2s;
}

body {
    padding: 0;
    margin: 0;
}

pre {
    margin: 0;
}

html {
    background-color: rgb(222,222,222);
    font-size: 16px;
}

#code {
    border: 1px solid red;
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

#code {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: auto
}

/*3D效果来一波～*/
#code {
    transform: rotate(360deg)
}
/*下面我来介绍我自己～*/
/*我需要一张白纸*/
#paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    overflow: hidden;
}

#paper > #content {
    height: 100%;
    width: 100%;
    background-color: white;
    overflow: auto;
}
`
var result2 =
    `
/*下面我用markdown来自我介绍*/

`


writeCode('', result, () => {
    createPaper(
        () => {
            writeCode(result, result2, () => {
                writeMd(md, ()=>{mdToHtml(md)})
            })
        }
    )
})