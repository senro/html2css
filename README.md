html2css
========

let you write emmet css in html<br>

html2css 可以让你在html标签里定义emmet简写css, <br>
例如<br>
...javascript
<div class="bg" data-css="mw967+bg:bg.jpg">
...
导出后<br>
得到去除data-css属性后的结构<div class="bg">和对应的css文件<br>
...css
.bg {
   min-width: 967px ;
   background: url(../images/bg.jpg) no-repeat ;
   } 
...
同时生成一个备份结构，以"原html文件名"-beforeExport命名。<br>
具体使用用法可以访问http://senro.cn/html2css/ 查看！<br>