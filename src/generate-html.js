/**
 * convert md to inline html
 */
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const { htmlTemplate, markdownStr } = require('./template');

const markdownElm = marked(markdownStr);
const html = htmlTemplate.replace(/%markdown-content%/g, markdownElm);

fs.open(path.resolve(__dirname, 'index.html'), 'w', (e, fd) => {
  if (e) throw e;
  fs.write(fd, html, 'utf8', (e) => {
    if (e) throw e;
    fs.closeSync(fd);
    console.log('index.html 生成完毕');
  });
});

