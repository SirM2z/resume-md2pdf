const htmlTemplate=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the 'main' element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent 'sub' and 'sup' elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from 'fieldset' elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    'fieldset' elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
</style>
  <style>/* body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, -apple-system,
    BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
body {
  height: 100%;
  max-height: 100%;
  font-size: 2.0rem;
  line-height: 1.6em;
  color: #3A4145;
}

.markdown-content {
  /* font: 400 18px/1.62 "Georgia", "Xin Gothic", "Hiragino Sans GB",
    "Droid Sans Fallback", "Microsoft YaHei", sans-serif; */
  font: 400 18px/1.62 "Georgia", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  color: #444443;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 40px 0;
  word-break: break-all;
}

.markdown-content ::-moz-selection {
  background-color: rgba(0, 0, 0, 0.2);
}

.markdown-content ::selection {
  background-color: rgba(0, 0, 0, 0.2);
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  /* font-family: "Georgia", "Xin Gothic", "Hiragino Sans GB",
    "Droid Sans Fallback", "Microsoft YaHei", "SimSun", sans-serif; */
  color: #222223;
  font-weight: bold;
}

.markdown-content h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

.markdown-content > h1 {
  margin-top: 0;
}

.markdown-content h2 {
  font-size: 1.6em;
  margin: 0.83em 0;
}

.markdown-content h3 {
  font-size: 1.17em;
  margin: 1em 0;
}

.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  font-size: 1em;
  margin: 1.6em 0 1em 0;
}

.markdown-content h6 {
  font-weight: 500;
}

.markdown-content p {
  margin-top: 0;
  margin-bottom: 1.46em;
}

.markdown-content p:last-of-type {
  margin-bottom: 0;
}

.markdown-content a {
  color: #111;
  word-wrap: break-word;
  text-decoration-color: rgba(0, 0, 0, 0.4);
}

.markdown-content a:hover {
  color: #555;
  text-decoration: underline;
  text-decoration-color: rgba(0, 0, 0, 0.6);
}

.markdown-content strong,
.markdown-content b {
  font-weight: 700;
  color: #222223;
}

.markdown-content em,
.markdown-content i {
  font-style: italic;
  color: #222223;
}

.markdown-content img {
  max-width: 100%;
  height: auto;
  margin: 0.2em 0;
}

.markdown-content a img {
  /* Remove border on IE */
  border: none;
}

.markdown-content figure {
  position: relative;
  clear: both;
  outline: 0;
  margin: 10px 0 30px;
  padding: 0;
  min-height: 100px;
}

.markdown-content figure img {
  display: block;
  max-width: 100%;
  margin: auto auto 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.markdown-content figure figcaption {
  position: relative;
  width: 100%;
  text-align: center;
  left: 0;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: #666665;
}

.markdown-content figure figcaption a {
  text-decoration: none;
  color: #666665;
}

.markdown-content hr {
  display: block;
  width: 14%;
  margin: 40px auto 34px;
  border: 0 none;
  border-top: 2px solid #dededc;
}

.markdown-content blockquote {
  margin: 0 0 1.64em 0;
  border-left: 3px solid #dadada;
  padding-left: 12px;
  color: #666664;
}

.markdown-content blockquote a {
  color: #666664;
}

.markdown-content ul,
.markdown-content ol {
  margin: 0 0 24px 6px;
  padding-left: 16px;
}

.markdown-content ul {
  list-style-type: square;
}

.markdown-content ol {
  list-style-type: decimal;
}

.markdown-content li {
  margin-bottom: 0.2em;
  font-size: 18px;
}

.markdown-content li ul,
.markdown-content li ol {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 14px;
}

.markdown-content li ul {
  list-style-type: disc;
}

.markdown-content li ul ul {
  list-style-type: circle;
}

.markdown-content li p {
  margin: 0.4em 0 0.6em;
}

.markdown-content .unstyled {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.markdown-content code,
.markdown-content tt {
  color: #808080;
  font-size: 0.96em;
  background-color: #f9f9f7;
  padding: 1px 2px;
  border: 1px solid #dadada;
  border-radius: 3px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}

.markdown-content pre {
  margin: 1.64em 0;
  padding: 7px;
  border: none;
  border-left: 3px solid #dadada;
  padding-left: 10px;
  overflow: auto;
  line-height: 1.5;
  font-size: 0.96em;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  color: #4c4c4c;
  background-color: #f9f9f7;
}

.markdown-content pre code,
.markdown-content pre tt {
  color: #4c4c4c;
  border: none;
  background: none;
  padding: 0;
}

.markdown-content table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 1.5em;
  font-size: 0.96em;
}

.markdown-content th,
.markdown-content td {
  text-align: left;
  padding: 4px 8px 4px 10px;
  border: 1px solid #dadada;
}

.markdown-content td {
  vertical-align: top;
}

.markdown-content tr:nth-child(even) {
  background-color: #efefee;
}

.markdown-content iframe {
  display: block;
  max-width: 100%;
  margin-bottom: 30px;
}

.markdown-content figure iframe {
  margin: auto;
}

.markdown-content table pre {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
}

@media (min-width: 1100px) {
  .markdown-content blockquote {
    margin-left: -24px;
    padding-left: 20px;
    border-width: 4px;
  }

  .markdown-content blockquote blockquote {
    margin-left: 0;
  }

  .markdown-content figure img {
    margin: 0 0 4px;
  }

  .markdown-content figure figcaption:before {
    width: 25%;
    margin-left: 75%;
    border-top: 1px solid #dededc;
    display: block;
    content: "";
    margin-bottom: 10px;
  }

  .markdown-content figure figcaption {
    position: absolute;
    left: -172px;
    width: 150px;
    top: 0;
    text-align: right;
    margin-top: 0;
  }
}
</style>
  <style>.header {
  width: 100%;
  height: 230px;
  line-height: 230px;
  text-align: center;
  margin-bottom: 1.2em;
  text-align: center;
  color: #fff;
  background-color: #303538 !important;
  font-size: 30px;
  font-weight: bold;
}</style>
</head>
<body>
  <div class="app">
    <header class="header">你好你好你好</header>
    <div class="markdown-content">
      %markdown-content%
    </div>
  </div>
</body>
</html>`;

const markdownStr = ``;

module.exports = {
  htmlTemplate,
  markdownStr
}