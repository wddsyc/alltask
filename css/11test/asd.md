## 什么是 CSS hack
由于不同厂商的流览器或某浏览器的不同版本（如IE6-IE11,Firefox/Safari/Opera/Chrome等），对CSS的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。这时，我们为了获得统一的页面效果，就需要针对不同的浏览器或不同版本写特定的CSS样式，我们把这个针对不同的浏览器/不同版本写相应的CSS code的过程，叫做CSS hack

## 谈一谈浏览器兼容的思路
- 是否要做兼容
做产品设计时就得先将兼容性做讨论，主要从产品的受众、受众的浏览器占比、以及产品的设计是以特效画面优先还是功能稳定性优先。

- 兼容的成本
若是创业公司前期可暂时不考虑兼容性有利于快速上线和快速迭代，但是若为政府或大型企业及海外公司，这种需要受众需要

- 做到什么程度
让哪些浏览器支持哪些效果

- 怎么实现

-- 根据兼容需求选择技术框架/库(jquery)
-- 根据兼容需求选择兼容工具(html5shiv.js、respond.js、css reset、normalize.css、Modernizr)
-- postCSS
-- 当以上三种方法不够时，或者自己的页面比较小，用不到大型的库，可以用条件注释、CSS Hack、js 能力检测做一些修补
- 逐渐增强和优雅降级

-- 逐渐增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
-- 优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
-- 区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

## 列举5种以上浏览器兼容的写法
- -moz- 、 -webkit-、 -o-、 -ms- 前缀
- 条件注释法（ie10以上不再支持条件注释）

`<!--[if IE 6]>
  <p>You are using Internet Explorer 6.</p>
  <![endif]-->
  <!--[if !IE]><!-->
  <script>alert(1);</script>
  <!--<![endif]-->
  <!--[if IE 8]>
  <link href="ie8only.css" rel="stylesheet">
  <![endif]-->`
- html5shiv.js
Html5shiv，指的是HTML 5标签结构，使ie低版本浏览器可以支持HTML 5

- !important ,表示高优先级，ie7及以上、firefox都支持，ie6认识带!important的样式属性，但并不理解!important的优先级

- 选择器前置法

`.box{
   color: red;
   _color: blue;              /*ie6能识别*/
   *color: pink;              /*ie67都能识别*/
   color: yellow\9;           /*ie/edge 6-8都能识别*/
}`

## 条件注释
条件注释 (conditional comment) 是于HTML源码中被IE有条件解释的语句。条件注释可被用来向IE提供及隐藏代码
`<!--[if IE]>用于 IE <![endif]-->
<!--[if IE 6]>用于 IE6 <![endif]-->
<!--[if IE 7]>用于 IE7 <![endif]-->
<!--[if IE 8]>用于 IE8 <![endif]-->
<!--[if IE 9]>用于 IE9 <![endif]-->
<!--[if gt IE 6]> 用于 IE6 以上版本<![endif]-->
<!--[if lte IE 7]> 用于 IE7或更低版本 <![endif]-->
<!--[if gte IE 8]>用于 IE8 或更高版本 <![endif]-->
<!--[if lt IE 9]>用于 IE9 以下版本<![endif]-->
<!--[if !IE]> -->用于非 IE <!-- <![endif]-->`

## IE Hack
使用特殊的符号或者方式写出只有IE浏览器可以解析的代码，有CSS属性前缀法、选择器前缀法以及IE条件注释法。
## js 能力检测
浏览器的能力检测目标不是检测特定的浏览器，而是检测浏览器的能力。这样，只需要检测浏览器是否支持特定的能力，就可以给出特定的解决方案。这一部分检测是解决浏览器兼容问题的主要检测
## html5shiv.js
用于解决IE9以下版本浏览器对HTML5新增标签不识别，并导致CSS不起作用的问题。
由于IE6/IE7/IE8还有很大一部分用户，为了让网站浏览者都能正常的访问HTML5网站，解决方案就有下面两个：
(1) 为网站创建多套模板，通过程序对User-Agent的判断给不同的浏览器用户显示不同的页面，这样的维护成本比较高，也失去响应式设计的意义。
(2) 使用Javascript来使不支持HTML5的浏览器支持HTML标签。目前大多网站采用的这种方式（Bootcss官方例子也是如此）。
原理：利用脚本document.createElement(“”)创建对应的脚本，CSS选择器便可正确应用到该标签。使用：考虑到IE9是支持html5的，所以直接在HTML页面的head标签中添加脚本引用即可。
## respond.js
让不支持css3 Media Query的浏览器包括IE6-IE8等其他浏览器支持查询
## css reset
将浏览器的默认样式全部去掉，就是通过重新定义标签样式。“覆盖”浏览器的CSS默认属性
## normalize.css
Normalize.css 是一个可定制的CSS文件，使浏览器呈现的所有元素，更一致和符合现代标准。它正是针对只需要统一的元素样式。该项目依赖于研究浏览器默认元素风格之间的差异，精确定位需要重置的样式。这是一个现代的，HTML5-ready 的CSS重置样式集。
## Modernizr
Modernizr 是一个 JavaScript 库，用于检测用户浏览器的 HTML5 与 CSS3 特性。
Modernizr 使你可以方便地为各种情况编写 JavaScript 和 CSS，无论浏览器是否支持这些特性。这是处理渐进增强的完美方案。
工作原理:Modernizr 会在页面加载后立即检测特性；然后创建一个包含检测结果的 JavaScript 对象，同时在 html 元素加入方便你调整 CSS 的 class 名。
## postCSS
PostCSS 是使用 JS 插件来转换 CSS 的工具，支持变量，混入，未来 CSS 语法，内联图像等等。
PostCSS 包括 CSS 解析器，CSS 节点树 API，一个源映射生成器和一个节点树 stringifier。
PostCSS是CSS变成JavaScript的数据，使它变成可操作。PostCSS是基于JavaScript插件，然后执行代码操作。PostCSS自身并不会改变CSS，它只是一种插件，为执行任何的转变铺平道路。

## 一般在哪个网站查询属性兼容性？
(https://caniuse.com/)[https://caniuse.com/]