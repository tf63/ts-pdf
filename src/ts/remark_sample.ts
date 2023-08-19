const unified = require('unified')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const html = require('rehype-stringify')

const processor = unified().use(markdown).use(remark2rehype).use(html)
const input = `
# はじめてのRemark
**太字**_斜体_テキスト
`
processor.process(input).then(({ contents }) => {
    console.log(contents)
})
