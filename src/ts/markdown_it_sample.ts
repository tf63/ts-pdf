const markdownIt = require('markdown-it')
const fs = require('fs')

const getHtmlLine = () => {
    const md = markdownIt()
    const mdResult = md.render('# markdown-it rulezz!')

    return mdResult
}

const getHtmlPage = () => {
    const md = markdownIt()
    const mdFile = fs.readFileSync('src/md/input.md', 'utf-8')
    const mdResult = md.render(mdFile)

    return mdResult
}

const getHtmlMath = () => {
    const md = markdownIt()
    const mdFile = fs.readFileSync('src/md/math.md', 'utf-8')
    const mdResult = md.render(mdFile)

    return mdResult
}

var result = getHtmlLine()
console.log(result) // HTMLが文字列として出力される
fs.writeFileSync('out/line.html', result, 'utf-8')

var result = getHtmlPage()
console.log(result) // HTMLファイルが文字列として出力される
fs.writeFileSync('out/page.html', result, 'utf-8')

var result = getHtmlMath()
console.log(result) // HTMLファイルが文字列として出力される
fs.writeFileSync('out/math.html', result, 'utf-8')

// const md = window.markdownit()
// const result = md.render('# markdown-it rulezz!')
