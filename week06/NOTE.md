# 盒
```
HTML代码中可以书写开始__标签__，结束__标签__ ，和自封闭__标签__ 。

一对起止__标签__ ，表示一个__元素__ 。

DOM树中存储的是__元素__和其它类型的节点（Node）。

CSS选择器选中的是__元素__ 。

CSS选择器选中的__元素__ ，在排版时可能产生多个__盒__ 。

排版和渲染的基本单位是__盒__ 。
```
```
box-sizing： 
• content-box
• border-box

box-sizing: content-box 是W3C盒子模型, 在标准的盒模型中，width指content部分的宽度
box-sizing: border-box 是IE盒子模型, width表示content+padding+border这三个部分的宽度

box-sizing的默认属性是content-box
```



# 正常流排版
- 收集盒和文字进行
- 计算盒和文字在行中的排布
- 计算行的排布

### 行级排布
- line-top
- text-top
- base-line
- text-bottom
- line-bottom

- 行内盒inline-block基线是随着里面的文字去变化的

### 块级排布

- float
  - 浮动元素脱离了正常流，但是它是一个依附于正常流去定义的一类元素的排布方式
  - 可以视为，先把元素排到某个特定的位置，当成一个正常流的里的元素，如果上面有float，朝着方向去挤一下，后根据float占据的区域，调整行盒的位置，计算位置的时候，理论上讲还没有计算每个文字的具体位置，理论上不需要重排
  - 显著的特征，会影响生成行盒的尺寸
  - float元素能浮动到的位置受上一个元素的影响

- clear 找到一个干净的区域来执行浮动
- margin collpse（边距合并） 只会发生在正常流的块级排布里面

### BFC合并
  - Block Container
  - Block-level Box
  - Block Box = Block Container + Block-level Box

### FLEX排版
  - 收集盒进行
    - 分行
      - 根据主轴尺寸，把元素分进行
      - 若设置了no-wrap，则强行分配进第一行


  - 计算盒在主轴方向的排布
    - 计算主轴方向
      - 找出所有Flex元素
      - 把主轴方向的剩余尺寸按比例分配给这些元素
      - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素


  - 计算盒在交叉轴方向的排布
    - 计算交叉轴方向
      - 根据每一行中最大元素尺寸计算行高
      - 根据行高flex-align和item-align，确定元素具体位置

# 动画与绘制
  ### 动画
  - Animation
    - animation-name 时间曲线
    - animation-duration 动画的时长；
    - animation-timing-function 动画的时间曲线；
    - animation-delay 动画开始前的延迟；
    - animation-iteration-count 动画的播放次数；
    - animation-direction 动画的方向。

  - Transition
    - transition-property 要变换的属性；
    - transition-duration 变换的时长；
    - transition-timing-function 时间曲线；
    - transition-delay 延迟。
  
  - cubic-bezier 贝塞尔曲线
    - https://cubic-bezier.com/

  ### 颜色
    - RGB 颜色
    - CMYK 颜色
    - HSL 颜色
    - 其它颜色
    - 渐变

  ### 绘制
    - 几何图形
      - border
      - box-shadow
      - border-radius
    - 文字
      - font
      - text-decoration
    - 位图
      - background-image

