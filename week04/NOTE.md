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