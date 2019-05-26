/**
 * convert md to html
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const md = require('markdown-it');
const wkhtmltopdf = require('wkhtmltopdf');
const mdPluginSpan = require('./markdown-it-span');

const appDirectory = fs.realpathSync(process.cwd());

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  })
}

// 获取 markdown string
function getMarkdownStr() {
  return readFilePromise(path.resolve(__dirname, 'doc.md')).then(res => {
    return new md().use(mdPluginSpan).render(res);
  });
}

// 生成 html string
function generateHtmlStr(markdownElm, title) {
  return readFilePromise(path.resolve(__dirname, 'template.html')).then(res => {
    return res.replace(/%markdown-title%/g, title).replace(/%markdown-content%/g, markdownElm);
  });
}

// 写入 index.html
function writeHtml(html) {
  fs.open(path.resolve(appDirectory, 'index.html'), 'w', (e, fd) => {
    if (e) throw e;
    fs.write(fd, html, 'utf8', (e) => {
      if (e) throw e;
      fs.closeSync(fd);
    })
  });
}

(async function() {
  const title = process.env.TITLE;
  const markdownElm = await getMarkdownStr();
  const html = await generateHtmlStr(markdownElm, title);
  writeHtml(html);
  wkhtmltopdf(html).pipe(fs.createWriteStream(path.resolve(appDirectory, 'index.pdf')));
})();
