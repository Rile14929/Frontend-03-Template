# 第二周 | 浏览器工作原理

## 1. 浏览器工作原理总论

![flow](./flow.png)

我们看到的页面都是一个图片形式，专业点的说法叫做位图（Bitmap），然后经过显卡转换为我们可以识别的光信号。

整个的过程就是从 URL 转换为 Bitmap 的过程，先发送请求到服务器，然后服务器返回 HTML，浏览器解析 HTML，然后构建 DOM 树，计算 CSS 属性，然后进行排版，最后渲染成位图，然后经过操作系统或硬件的 API 完成视图的显示

## 2. 状态机

- 有限状态机
  - 每一个状态都是一个机器
    - 在每个机器里都可以做计算、存储、输出
    - 所有的机器接受的输入时一致的
    - 状态机的每一个机器本省没有状态，如果我们用函数来表示的话，应该是纯函数（无副作用）
  - 每一个机器都知道下一个状态
    - 每个机器都有确定的下一个状态（Moore）
    - 每个机器根据输入决定下一个状态（Mealy）
- 之前看winter老师的课，讲到状态机，并没有怎么理解，但是通过这次winter老师的讲解以及使用和不适用状态机堆字符进行处理后，对状态机的概念和简单的运用都有了理解

## 3. HTTP

- HTTP协议解析

  - ISO-OSI七层网络模型

    | 层         | 对应        |
    | ---------- | ----------- |
    | 应用层     | HTTP        |
    | 表示层     | HTTP        |
    | 会话层     | HTTP        |
    | 传输层     | TCP / UDP   |
    | 网络层     | Internet    |
    | 数据链路层 | 4G/5G/Wi-Fi |
    | 物理层     | 4G/5G/Wi-Fi |

    

- HTTP请求的实现

  - HTTP请求总结
    - 设计一个HTTP请求的类
    - content type 是一个必要字段 要有默认值
    - body是key value 格式
    - 不同的content-type影响body的格式
  - 发送请求 && send函数的编写
    - 设计支持已有的connection或者自己新建connection
    - 收到数据传递给parser
    - 根据parser的状态resolve Promise
  - response解析
    - Response必须分段构造，用ResponseParse来装配
    - ResponseParse分段处理ResponseText，我们用状态机来分析文本的结构
  - response body 解析
    - Response的body可能根据content-type有不同的结构，采用子parser的结构来解决问题
    - 以TrunkedBodyParser为例，同样适用状态机来处理body的格式

  





