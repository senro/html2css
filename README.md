html2css
========

let you write emmet css in html

html2css 可以让你在html标签里定义emmet简写css, \r\n\r\n 例如 div class=\"bg\" data-css=\"mw967+bg:bg.jpg\"导出后得到去除data-css属性后的结构div class=\"bg\" \r\n\r\n 和对应的css文件\r\n\r\n.bg {\r\n\r\n min-width: 967px ;\r\n\r\n background: url(../images/bg.jpg) no-repeat ;\r\n\r\n}  \r\n\r\n 同时生成一个备份结构，以\"原html文件名\"-beforeExport命名。\r\n\r\n 具体使用用法可以访问http://senro.cn/html2css/\r\n查看！