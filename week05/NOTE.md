# css 2.1
- https://www.w3.org/TR/CSS21/grammar.html#q25.0
- https://www.w3.org/TR/css-syntax-3/
- 总体结构
  - @charset
  - @import
  - rules
    - @media
    - @page
    - rule

# At-rules
- @charset： https://www.w3.org/TR/css-syntax-3/ 声明CSS字符集
- @import：https://www.w3.org/TR/css-cascade-4/  级联规则
- @media：https://www.w3.org/TR/css3-conditional/ 有条件规则
- @page： https://www.w3.org/TR/css-page-3/ 分页媒体（打印）
- @counter-style：https://www.w3.org/TR/css-counter-styles-3/ 列表前的数字或黑点
- @keyframes：https://www.w3.org/TR/css-animations-1/ 动画
- @fontface：https://www.w3.org/TR/css-fonts-3/ 字体
- @supports：https://www.w3.org/TR/css3-conditional/ 兼容性不建议使用
- @namespace：https://www.w3.org/TR/css-namespaces-3/ 命名空间

# CSS规则
- 选择器
  - https://www.w3.org/TR/selectors-3/
  - https://www.w3.org/TR/selectors-4/

- 声明 Key
  - Properties 声明属性
  - Variables: https://www.w3.org/TR/css-variables/

- Value
  - https://www.w3.org/TR/css-values-4/

``` css
:root {
  --main-color: #06c;
  --accent-color: #006;
}
/* The rest of the CSS file */
#foo h1 {
  color: var(--main-color);
}
/*默认值*/
.component .header {
  color: var(--header-color, blue);
}
.component .text {
  color: var(--text-color, black);
}
/*用作key*/
.foo {
  --side: margin-top;
  var(--side): 20px;
}
/*替换后成为无效值*/
:root { --not-a-color: 20px; }
p { background-color: red; }
p { background-color: var(--not-a-color); }


/* css-values-4 */
/*进行简单计算*/
:root {
  font-size: calc(100vw / 35);
}
 /*让CSS的值和元素属性绑定*/
Attribute References: attr()
```

# 收集标准 (实验)
1. 进入https://www.w3.org/TR/ 并选择css
2. 收集第二步： 打开控制台输入以下代码并复制结果
```javascript
JSON.stringify(Array.prototype.slice.call(document.querySelector("#container").children).filter(
    e => e.getAttribute("data-tag").match(/css/)).map(e => ({
    name: e.children[1].innerText,
    href: e.children[1].children[0].href
})))
```
3. 将结果命名var standards =

4. 获取第二步结果页面里面的数据
``` javascript
let iframe = document.createElement('iframe');
document.body.innerHTML = "";
document.body.append(iframe);

function happen(element,event){
    return new Promise(function (resolve) {
        let handler = () =>{
            setTimeout(()=>{resolve();},2001)
            element.removeEventListener(event,handler)
        }
        element.addEventListener(event,handler)
    });
}

void async function () {
    for (let standard of standards) {
        iframe.src = standard.href;
        console.log(standard.name);
        await happen(iframe,"load")
        console.log(iframe.contentDocument.querySelector(".propdef"));
    }
}()
// if (getCookie('hide-obsolescence-warning') == '1') setTimeout(removeWIP, 2000);访问次数过多
```

# 选择器语法
- 简单选择器
  - *  通用选择器
  - div svg|a
  - type selector 选择的是tagName属性  命名空间：HTML SVG MathML
  - .cls class 空白分隔符
  - #id  id
  - [attr=value]
  - 属性选择器，囊括了class属性选择器id选择器
  - attr = value  name = 值
  - 等号之前加~，表示像class一样支持拿空格分隔的值得序列
  - 等号之前加|，表示这个属性以这个值开头即可
  - :hover伪类，元素特殊状态
  - ::before 伪元素以双冒号开头，提倡双冒号，这可以更好的分别伪类和伪元素

- 复合选择器 combined
  - <简单选择器><简单选择器><简单选择器> 
  - * 或者 div 必须写在最前面

- 复杂选择器
  - <复合选择器><复合选择器> 子孙选择器
  - <复合选择器>">"<复合选择器> 父子选择器
  - <复合选择器>"~"<复合选择器> 
  - <复合选择器>"+"<复合选择器>
  - <复合选择器>"||"<复合选择器> 选中某一列

# 选择器优先级
  写出下面选择器的优先级： div#a.b .c[id=x] 0 1 3 1 #a:not(#b) 0 2 0 0 *.a 0 0 1 0 div.a 0 0
  ```
  取 N = 10000

  div#a.b .c[id=x] [0 1 3 1]
  S = 0 * N^3 + 1 * N^2 + 3 * N^1 + 1 = 100030001


  #a:not(#b) [0 2 0 0]
  S = 0 * N^3 + 2 * N^2 + 0 * N^1 + 0 = 200000000

  *.a [0 0 1 0]
  S = 0 * N^3 + 0 * N^2 + 1 * N^1 + 0 = 10000

  div.a [0 0 1 1]
  S = 0 * N^3 + 0 * N^2 + 1 * N^1 + 1 = 10001


  2 > 1 > 4 > 3
  #a:not(#b) > div#a.b .c[id=x] > div.a > *.a
  ```

# 伪类
- 链接/行为
  - :any-link  任何超链接
  - :link :visited 还没有访问 已经访问（使用过后无法更改文字颜色以外的属性）
  - :hover  鼠标移入
  - :active  激活状态
  - :focus  焦点
  - :target  链接到当前目标

- 树结构
  - :empty  是否有子元素
  - :nth-child()  
  父元素的第几个子元素
  支持一种语法 even odd 奇偶 3n+1 4n-1
  - :nth-last-child()  从后往前
  - :first-child :last-child :only-child
  第一个子元素 最后一个子元素 只有一个子元素

- 逻辑型
  - :not伪类 复合选择器
  - :where :has

# 伪元素
- ::before ::after 元素内容前后插入伪元素
- ::first-line 选中第一行
- ::first-letter 选中第一个字母
``` html
  <::before/>
  content content content content
  content content content content
  content content content content
  content content content content
  content content content content
  content content content content
  <::after/>
  </div>

  <div>
  <::first-letter>c</::first-letter> content content content content
  content content content content
  content content content content
  content content content content
  content content content content
  content content content content
  </div>
  伪元素
  <div>
  <::first-line>content content content content </::first-line> 
  content content content content
  content content content content
  content content content content
  content content content content
  content content content content
  </div>
```


