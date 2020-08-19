**排版**
- 预处理
  - 处理了flexDirection 和 wrap 相关的属性
  - 把具体width, height, left, right, top ,bottom等属性抽象成了main和cross等属性

- 分行
  - 根据主轴尺寸，把元分进行
  - 若设置no-wrap，则强行分配进第一行

- 计算主轴方向
  - 找出所有flex元素
  - 把主轴方向的剩余尺寸按比例分配给这些元素
  - 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

- 计算交叉轴方向
  - 根据每一行中最大元素尺寸计算行高
  - 根据行高flex-align和item-align，确定元素具体位置

- 绘制
  - 一
    - 绘制需要依赖一个图形环境，使用images
    - 绘制在一个viewport上进行
    - 与绘制相关的属性： background-color, border, background-image等
  - 二
    - 递归调用子元素的绘制方法完成DOM树的绘制
    - 忽略一些不需要绘制的节点
    - 实际浏览器中，文字绘制中是难点，需要依赖字体库（忽略）
    - 实际浏览器中，还会对图层做compositing（忽略）
