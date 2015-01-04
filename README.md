html2css
========

let you write emmet css in html

html2css 可以让你在html标签里定义emmet简写css, 
例如 <div class="bg" data-css="mw967+bg:bg.jpg">导出后
得到去除data-css属性后的结构<div class="bg">和对应的css文件
.bg {
   min-width: 967px ;
   background: url(../images/bg.jpg) no-repeat ;
   } 
同时生成一个备份结构，以"原html文件名"-beforeExport命名。
具体使用用法可以访问http://senro.cn/html2css/ 查看！