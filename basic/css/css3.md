## CSS3

------

### 基本的css语法

<img src="../img/web-css-00.png">

### CSS选择器

<img src="../img/web-css-01.png">

+ CSS 派生选择器

  通过依据元素在其位置的上下文关系来定义样式，你可以使标记更加简洁。

  ```css
  strong { color: red; }
  h2 { color: red; }
  h2 strong { color: blue; }
  ```

+ CSS id选择器

  ID 选择器可以为标有特定 id 的 HTML 元素指定特定的样式;ID 选择器以 "#" 来定义.

  ```HTML
  <p id="red">这个段落是红色。</p>
  <p id="green">这个段落是绿色。</p>
  #red {color:red;}
  #green {color:green;}
  ```

+ CSS 类选择器

  在 CSS 中，类选择器以一个点号显示

  ```HTML
  .center {text-align: center}
  <h1 class="center">
  This heading will be center-aligned
  </h1>
  <p class="center">
  This paragraph will also be center-aligned.
  </p>
  ```

+ CSS 属性选择器

  对带有指定属性的 HTML 元素设置样式。

  ```HTML
  [title=W3School] {
    border:5px solid blue;
  }
  //
  input[type="text"]
  {
    width:150px;
    display:block;
    margin-bottom:10px;
    background-color:yellow;
    font-family: Verdana, Arial;
  }
  //
  input[type="button"]
  {
    width:120px;
    margin-left:35px;
    display:block;
    font-family: Verdana, Arial;
  }
  ```

### 多重样式优先级

一般情况下，优先级如下：

内联样式 >内部样式 >外部样式> 浏览器默认样式

注意：如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式